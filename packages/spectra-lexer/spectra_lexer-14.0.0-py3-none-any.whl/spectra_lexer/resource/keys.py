from collections import defaultdict
from typing import Callable, Dict, Set

StenoKeyConverter = Callable[[str], str]  # Conversion method between types of steno key strings.


class StenoKeyLayout:
    """ Contains all sections and characters required in a standard steno key layout.
        There are two general string-based formats of steno keys:
        s-keys - Internal format used exclusively by this application.
                 Each key is a unique character. Lowercase letters are used for right-side keys.
                 Used by the lexer since one key is always one character with no possible
                 ambiguity over sides even if the keys are in the wrong order.
        RTFCRE - Older format defined in the "RTF Court Reporting Extensions" specification.
                 Keys are all uppercase, hyphen delimits left vs. right side of the board.
                 Center keys may also delimit the sides, in which case the hyphen is omitted.
                 Most steno dictionaries (i.e. for use in Plover) have strokes in this format.
        String variables should be distinctly labeled as "skeys" when they use the first format.
        Characters from an outside source (JSON files or the Plover engine) are assumed to be RTFCRE. """

    def __init__(self, *, sep:str, split:str, left:str, center:str, right:str,
                 special:str, aliases:Dict[str, str], **unused) -> None:
        self._sep = sep          # Stroke delimiter. This is the same in either format.
        self._split = split      # RTFCRE board split delimiter.
        self._special = special  # A single special-cased s-key (the asterisk).
        # Save some fields as pre-computed sets for fast membership tests and string conversion.
        self._left_set = set(left)      # Left-side keys. These are the same in either format.
        self._center_set = set(center)  # Center keys. These are the same in either format.
        self._right_set = set(right)    # Right-side RTFCRE keys.
        right_skeys = right.lower()
        self._right_skeys = set(right_skeys)  # Right-side s-keys.
        self._valid_rtfcre = {sep, split, *left, *center, *right}
        skeys = [*left, *center, *right_skeys]
        aliases.update(zip(skeys, skeys))
        self._alias_trans = defaultdict(type(None), str.maketrans(aliases))
        self._sk_order = {sk: i for i, sk in enumerate(skeys)}

    def separator_key(self) -> str:
        return self._sep

    def divider_key(self) -> str:
        return self._split

    def special_key(self) -> str:
        return self._special

    def valid_rtfcre(self) -> Set[str]:
        """ Return the set of all characters that are valid in a standard RTFCRE string. """
        return self._valid_rtfcre.copy()

    def _stroke_convert_case(self, s:str) -> str:
        """ Convert a case-insensitive RTFCRE stroke into case-sensitive LC/r s-keys. """
        s = s.upper()
        # If there's a hyphen, split the string there and rejoin with right side lowercase.
        if self._split in s:
            left, right = s.rsplit(self._split, 1)
            return left + right.lower()
        # If there's no hyphen, we must search for the split point between C and R.
        # First find out what center keys we have. Allowable combinations up to here are L, LC, LCR, CR.
        # The last center key in the string (if any) is the place to split, so start looking from the right end.
        for k in reversed(s):
            if k in self._center_set:
                left, right = s.rsplit(k, 1)
                return left + k + right.lower()
        # If there are no center keys, it is narrowed to L (left side only). No modifications are necessary.
        return s

    def _stroke_rtfcre_to_skeys(self, s:str) -> str:
        """ Translate an RTFCRE stroke into s-keys format. This involves lowercasing the right side,
            replacing aliases, filtering duplicates, and sorting by steno order. """
        skeys = self._stroke_convert_case(s)
        skeys = skeys.translate(self._alias_trans)
        unique_skeys = set(skeys)
        return "".join(sorted(unique_skeys, key=self._sk_order.__getitem__))

    def _stroke_skeys_to_rtfcre(self, s:str) -> str:
        """ Find the first right-side key in the stroke (if there is one).
            If it doesn't follow a center key, insert a hyphen before it.
            Only uppercase the string if right-side keys exist.
            This is idempotent; it will do nothing if the input is already RTFCRE. """
        for i, k in enumerate(s):
            if k in self._right_skeys:
                if not i or s[i - 1] not in self._center_set:
                    s = s[:i] + self._split + s[i:]
                return s.upper()
        return s

    def _stroke_map(self, s:str, fn:StenoKeyConverter) -> str:
        """ Split a set of keys, apply a conversion function to every stroke, and join them back together.
            If there is only one stroke, skip the string carving and apply the function directly. """
        sep = self._sep
        if sep in s:
            return sep.join(map(fn, s.split(sep)))
        return fn(s)

    def rtfcre_to_skeys(self, s:str) -> str:
        """ Transform an RTFCRE steno key string to s-keys. """
        return self._stroke_map(s, self._stroke_rtfcre_to_skeys)

    def skeys_to_rtfcre(self, s:str) -> str:
        """ Transform an s-keys string back to RTFCRE. """
        return self._stroke_map(s, self._stroke_skeys_to_rtfcre)

    def verify(self) -> None:
        """ Test various properties of the layout for correctness. """
        left = self._left_set
        center = self._center_set
        right = self._right_set
        normal_key_set = left | center | right
        # The center keys must not share any characters with the sides.
        assert not center & left
        assert not center & right
        # The left and right sides must not share characters after casing.
        assert not left & self._right_skeys
        # The special key must be a normal key previously defined.
        assert self._special in normal_key_set
        # The delimiters must *not* be previously defined keys.
        assert self._sep not in normal_key_set
        assert self._split not in normal_key_set
        # Each alias must map to one or more valid s-keys.
        s_keys_set = set(self._sk_order)
        for v in self._alias_trans.values():
            assert v
            assert set(v) <= s_keys_set
