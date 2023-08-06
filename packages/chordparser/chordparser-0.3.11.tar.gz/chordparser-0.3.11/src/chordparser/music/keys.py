from typing import Union

from chordparser.music.notes import Note


class Key:
    """
    Key class that composes of a Note as the root and its mode and submode.

    The Key class composes of a Note class with the additional attributes 'mode' and 'submode' (e.g. types of minor keys). It is created by the KeyEditor. Keys have the same methods as Notes.
    """

    def __init__(
            self, root, mode: str,
            submode: Union[str, None]
    ):
        self.root = root
        self.mode = mode
        self.submode = submode

    def __getattr__(self, attribute):
        # So Note methods can be used on Key
        if attribute in Note.__dict__:
            return getattr(self.root, attribute)
        raise AttributeError(f"'Key' object has no attribute '{attribute}'")

    def __repr__(self):
        if not self.submode:
            return f'{self.root} {self.mode}'
        return f'{self.root} {self.submode} {self.mode}'

    def __eq__(self, other):
        # Allow comparison between Keys by checking their basic attributes
        if not isinstance(other, Key):
            return NotImplemented
        if self.mode in {'major', 'ionian'}:
            return (
                self.root == other.root
                and other.mode in {'major', 'ionian'}
                and self.submode == other.submode
            )
        if self.mode in {'minor', 'aeolian'}:
            return (
                self.root == other.root
                and other.mode in {'minor', 'aeolian'}
                and self.submode == other.submode
            )
        return (
            self.root == other.root
            and self.mode == other.mode
            and self.submode == other.submode
        )
