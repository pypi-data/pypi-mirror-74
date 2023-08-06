import re
from typing import Union

from chordparser.editors.notes_editor import NoteEditor
from chordparser.editors.quality_editor import QualityEditor
from chordparser.music.chords import Chord
from chordparser.music.keys import Key
from chordparser.music.quality import Quality
from chordparser.music.scales import Scale


class ChordEditor:
    """
    ChordEditor class that creates a Chord from either a string or a Scale/Key.

    The ChordEditor class can parse a chord notation string to create a Chord using the 'create_chord' method, or create a Chord by specifying a Scale/Key and scale degree using the 'create_diatonic' method. The ChordEditor can also change a chord using the 'change_chord' method.
    """
    NE = NoteEditor()
    QE = QualityEditor()
    _letter_pattern = '[a-gA-G]'
    _flat_pattern = '\u266D|\U0001D12B|bb|b'
    _sharp_pattern = '\u266F|\U0001D12A|##|#'
    _symbol_pattern = f"{_flat_pattern}|{_sharp_pattern}"
    _note_pattern = f"(?:{_letter_pattern})(?:{_symbol_pattern}){{0,1}}"
    _others = f"[^/]+"
    _added = f"(?:add){{0,1}}({_symbol_pattern}){{0,1}}(2|4|6|9|11|13)"
    _pattern = (
        f"({_note_pattern})"
        f"({QE.quality_pattern})"
        f"({_others}){{0,1}}"
        f"(?:/({_note_pattern})){{0,1}}"
    )
    _symbols = {
        'b': '\u266D', 'bb': '\U0001D12B',
        '#': '\u266F', '##': '\U0001D12A',
        None: '',
    }

    def create_chord(self, value):
        """Create a chord from a string (do not use any spaces)."""
        rgx = re.match(ChordEditor._pattern, value, re.UNICODE)
        if not rgx:
            raise SyntaxError(f"'{value}' could not be parsed")
        root, quality, add, bass = self._parse_rgx(rgx)
        return Chord(root, quality, add, bass, string=rgx.group(0))

    def _parse_rgx(self, rgx):
        """Distribute regex groups and form chord notation."""
        root = self._parse_root(rgx.group(1))
        quality = self._parse_quality(rgx.group(2), rgx.group(1)[0].isupper())
        add = self._parse_add(rgx.groups()[-2])
        bass_note = self._parse_bass(rgx.groups()[-1])
        return root, quality, add, bass_note

    def _parse_root(self, root):
        """Return chord root."""
        return self.NE.create_note(root)

    def _parse_quality(self, string, capital_note=True):
        """Return chord quality."""
        return self.QE.create_quality(string, capital_note)

    def _parse_add(self, string):
        """Parse added notes."""
        if string is None:
            return None
        add = []
        while True:
            reg = re.search(ChordEditor._added, string, re.UNICODE)
            if not reg:
                break
            foo = (ChordEditor._symbols[reg.group(1)], int(reg.group(2)))
            add.append(foo)
            string = ''.join(string.split(reg.group(0)))
        if string.strip():
            raise SyntaxError(f"'{string.strip()}' could not be parsed")
        add.sort(key=lambda x: x[1])  # sort by scale degree
        return add

    def _parse_bass(self, string):
        """Parse the bass note."""
        if not string:
            return None
        return self.NE.create_note(string)

    def create_diatonic(self, value: Union[Scale, Key], degree: int = 1):
        """Create a diatonic chord from a scale/key by specifying the scale degree."""
        if degree not in range(1, 8):
            raise ValueError("Scale degree must be between 1 and 7")
        if not isinstance(value, Scale):
            scale_ = Scale(value)
        else:
            scale_ = value
        root = scale_.notes[degree - 1]
        bass = None
        add = None
        base_chord = (
            scale_.notes[degree - 1],
            scale_.notes[degree + 1],
            scale_.notes[degree + 3],
        )
        quality_intervals = {
            (4, 3): 'M',
            (3, 4): 'm',
            (3, 3): 'dim',
            (4, 4): 'aug',
        }
        interval = self.NE.get_intervals(*base_chord)
        q_str = quality_intervals[interval]
        quality = self.QE.create_quality(q_str)
        return Chord(root, quality, add, bass)

    def change_chord(
            self,
            chord,
            root: Union[str, None] = None,
            quality: Union[str, None] = None,
            add: Union[str, None] = None,
            remove: Union[str, None] = None,
            bass: Union[str, bool, None] = None,
            inplace=True,
    ):
        """Change the chord by specifying root, quality, add, remove (you can only remove added notes), and/or bass. To remove the bass note, use bass=False. To remove all added notes, use remove=True."""
        if not inplace:
            chord = Chord(
                chord.root, chord.quality,
                chord.add, chord.bass, chord.string
            )
        if root:
            chord.root = self._parse_root(root)
        if quality:
            chord.quality = self._parse_quality(quality)
        if remove is True:
            chord.add = None
        elif remove:
            removed = self._parse_add(remove)
            for each in removed:
                try:
                    chord.add.remove(each)
                except ValueError:
                    raise ValueError(f"'{each}' is not an added note")
                except AttributeError:
                    raise IndexError("No added notes to be removed")
            chord.add = chord.add or None
        if add:
            chord.add = chord.add or []
            chord.add += self._parse_add(add)
            # re-sort after adding new added notes
            chord.add.sort(key=lambda x: x[1])
        if bass:
            chord.bass = self._parse_bass(bass)
        if bass is False:
            chord.bass = None
        chord.build()
        return chord
