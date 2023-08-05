from io import TextIOBase
from typing import Callable

from PyQt5.QtCore import pyqtSignal, QMimeData, Qt
from PyQt5.QtGui import QFont, QKeyEvent, QTextCursor
from PyQt5.QtWidgets import QDialog, QTextEdit, QVBoxLayout

from .system import SystemConsole


class HistoryTracker:
    """ Tracks previous lines of keyboard input, minus the newline. """

    def __init__(self) -> None:
        """ There will always be at least one empty line, at the beginning. """
        self._lines = [""]  # Tracked sections of text. May include internal newline characters.
        self._pointer = 0   # Pointer to current history line, 0 = earliest line.

    def add(self, s:str) -> None:
        """ Add a new line to the history and reset the pointer to just *after* the end.
            This means the next access will read this line no matter which way we move. """
        self._lines.append(s)
        self._pointer = len(self._lines)

    def prev(self) -> str:
        """ Scroll the history backward and return the next line. """
        return self.get(-1)

    def next(self) -> str:
        """ Scroll the history forward and return the next line. """
        return self.get(1)

    def get(self, increment:int=0) -> str:
        """ Return the line at the pointer after moving it and checking the bounds. """
        self._pointer = min(max(self._pointer + increment, 0), len(self._lines) - 1)
        return self._lines[self._pointer]


class StreamWriteAdapter(TextIOBase):
    """ Wraps a string callable in a text stream interface as write(). """

    def __init__(self, write:Callable[[str], None]) -> None:
        self._write = write

    def write(self, s:str) -> int:
        self._write(s)
        return len(s)

    def writable(self) -> bool:
        return True


class TerminalTextWidget(QTextEdit):
    """ Formatted text widget meant to display plaintext interpreter input and output as a terminal.
        The text content is composed of two parts. The "base text" includes everything before the prompt.
        This is the terminal's saved output; it may be copied but not be edited.
        The "user text" comes after the prompt; it is freely modifiable by the user.
        When the user presses Enter, the user text is sent in a signal, then frozen into the base text. """

    lineEntered = pyqtSignal([str])  # Sent with the current line of user input upon pressing Enter.

    def __init__(self, *args) -> None:
        super().__init__(*args)
        self._history = HistoryTracker()  # Tracks previous keyboard input.
        self._base_text = ""              # Unchangeable base text. User input may only appear after this.
        self._last_valid_text = ""        # Last valid state of text (including user input).
        self.setFont(QFont("Courier New", 10))
        self.setTextInteractionFlags(Qt.TextSelectableByMouse | Qt.TextEditorInteraction)
        self.textChanged.connect(self._on_edited)

    def _cursor_to_end(self) -> None:
        """ Reset the cursor to the end of the current text. """
        c = self.textCursor()
        c.movePosition(QTextCursor.End)
        self.setTextCursor(c)

    def _set_content(self, text:str) -> None:
        """ Set new text content and reset the cursor to the end without triggering signals. """
        self.blockSignals(True)
        self.setPlainText(text)
        self._last_valid_text = text
        self._cursor_to_end()
        self.blockSignals(False)

    def _on_edited(self) -> None:
        """ Undo anything that modifies the base text. """
        current_text = self.toPlainText()
        if current_text.startswith(self._base_text):
            self._last_valid_text = current_text
        else:
            self._set_content(self._last_valid_text)

    def add_base_text(self, text:str) -> None:
        """ Add to the base text of the widget. """
        self._base_text += text
        self._set_content(self._base_text)
        # To keep up with scrolling text, the vertical scroll position is fixed at the bottom.
        sy = self.horizontalScrollBar()
        sy.setValue(sy.maximum())

    def _set_cursor_valid(self) -> None:
        """ If the cursor is not within the current prompt, move it to the end. """
        c = self.textCursor()
        prompt_start = len(self._base_text)
        if c.position() < prompt_start:
            self._cursor_to_end()

    def keyPressEvent(self, event:QKeyEvent) -> None:
        """ Check the input for special cases. """
        # Up/down arrow keys will scroll through the command history.
        if event.key() == Qt.Key_Up:
            self._set_content(self._base_text + self._history.prev())
        elif event.key() == Qt.Key_Down:
            self._set_content(self._base_text + self._history.next())
        elif event.key() in (Qt.Key_Return, Qt.Key_Enter):
            # If a newline is entered, capture only the user-provided text.
            # Add it to the history, append it to the base text (with newline), and send it in a signal.
            user_text = self._last_valid_text[len(self._base_text):]
            self._history.add(user_text)
            self.add_base_text(user_text + "\n")
            self.lineEntered.emit(user_text)
        else:
            # In any other case, reset the cursor if necessary and pass the keypress as normal.
            self._set_cursor_valid()
            super().keyPressEvent(event)

    def insertFromMimeData(self, data:QMimeData) -> None:
        """ On a paste attempt, reset the cursor if necessary and paste only the plaintext content. """
        if data.hasText():
            self._set_cursor_valid()
            plaintext = QMimeData()
            plaintext.setText(data.text())
            super().insertFromMimeData(plaintext)

    def to_stream(self) -> TextIOBase:
        """ Wrap the widget as a writable text stream. """
        return StreamWriteAdapter(self.add_base_text)


class ConsoleDialog(QDialog):
    """ Qt console dialog window tool. Connects signals between the console, a text widget, and the keyboard. """

    def __init__(self, *args) -> None:
        super().__init__(*args)
        self.setWindowTitle("Python Console")
        self.setMinimumSize(680, 480)
        self._last_console = None                # Saved console reference (to avoid garbage collection).
        self._w_text = TerminalTextWidget(self)  # Text widget to process user input and console output.
        layout = QVBoxLayout(self)
        layout.addWidget(self._w_text)

    def start_console(self, namespace:dict=None) -> None:
        """ Start a new Python console instance with <namespace> as globals, disconnecting any previous console. """
        file = self._w_text.to_stream()
        console = SystemConsole.open(namespace, file)
        line_signal = self._w_text.lineEntered
        if self._last_console is not None:
            line_signal.disconnect()
        line_signal.connect(console.send)
        self._last_console = console
