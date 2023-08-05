# -*- coding: utf-8 -*-
"""
"""

import functools
import operator
import pathlib
import contextlib

from typing import List, Optional, Union

from qtpy import QtCore, QtWidgets

from prettyqt import gui, widgets
from prettyqt.utils import bidict, colors


H_ALIGNMENTS = bidict(
    left=QtCore.Qt.AlignLeft,
    right=QtCore.Qt.AlignRight,
    center=QtCore.Qt.AlignHCenter,
    justify=QtCore.Qt.AlignJustify,
)

V_ALIGNMENTS = bidict(
    top=QtCore.Qt.AlignTop,
    bottom=QtCore.Qt.AlignBottom,
    center=QtCore.Qt.AlignVCenter,
    baseline=QtCore.Qt.AlignBaseline,
)

TEXT_INTERACTION = bidict(
    none=QtCore.Qt.NoTextInteraction,
    by_mouse=QtCore.Qt.TextSelectableByMouse,
    by_keyboard=QtCore.Qt.TextSelectableByKeyboard,
    accessible_by_mouse=QtCore.Qt.LinksAccessibleByMouse,
    accessible_by_keyboard=QtCore.Qt.LinksAccessibleByKeyboard,
    text_editable=QtCore.Qt.TextEditable,
    like_text_editor=QtCore.Qt.TextEditorInteraction,
    like_text_browser=QtCore.Qt.TextBrowserInteraction,
)

TEXT_FORMATS = bidict(
    rich=QtCore.Qt.RichText, plain=QtCore.Qt.PlainText, auto=QtCore.Qt.AutoText
)

WEIGHTS = gui.font.WEIGHTS


QtWidgets.QLabel.__bases__ = (widgets.Frame,)


class Label(QtWidgets.QLabel):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.openExternalLinks()

    def __repr__(self):
        return f"Label({self.text()!r})"

    def __getstate__(self):
        return dict(
            text=self.text(),
            scaled_contents=self.hasScaledContents(),
            indent=self.indent(),
            margin=self.margin(),
            text_format=self.get_text_format(),
            # pixmap=self.pixmap(),
            open_external_links=self.openExternalLinks(),
            alignment=int(self.alignment()),
            word_wrap=self.wordWrap(),
        )

    def __setstate__(self, state):
        self.__init__()
        self.setText(state.get("text", ""))
        self.setIndent(state.get("indent", -1))
        self.setMargin(state.get("margin", 0))
        self.setWordWrap(state.get("word_wrap", 0))
        self.set_text_format(state.get("text_format", 0))
        # self.setPixmap(state.get("pixmap"))
        self.setOpenExternalLinks(state.get("open_external_links", False))
        self.setAlignment(QtCore.Qt.Alignment(state.get("alignment")))
        self.setScaledContents(state["scaled_contents"])
        self.setWordWrap(state["word_wrap"])

    def allow_links(self):
        # self.setText("<a href=\"http://example.com/\">Click Here!</a>")
        self.setTextFormat(QtCore.Qt.RichText)
        self.setTextInteractionFlags(QtCore.Qt.TextBrowserInteraction)
        self.setOpenExternalLinks(True)
        return self

    def set_alignment(
        self, horizontal: Optional[str] = None, vertical: Optional[str] = None
    ):
        if horizontal is None and vertical is not None:
            flag = V_ALIGNMENTS.get(vertical)
        elif vertical is None and horizontal is not None:
            flag = H_ALIGNMENTS.get(horizontal)
        elif vertical is not None and horizontal is not None:
            flag = V_ALIGNMENTS.get(vertical) | H_ALIGNMENTS.get(horizontal)
        else:
            return
        self.setAlignment(flag)
        return self

    def set_indent(self, indent: int):
        self.setIndent(indent)
        return self

    def set_text_format(self, text_format: str):
        """set the text format

        Allowed values are "rich", "plain", "auto"

        Args:
            text_format: text format to use

        Raises:
            ValueError: text format does not exist
        """
        if text_format not in TEXT_FORMATS:
            raise ValueError("Invalid text format")
        self.setTextFormat(TEXT_FORMATS[text_format])
        return self

    def get_text_format(self) -> str:
        """returns current text format

        Possible values: "rich", "plain", "auto"

        Returns:
            text format
        """
        return TEXT_FORMATS.inv[self.textFormat()]

    def set_text_interaction(self, *types: str):
        """set the text interaction mode

        Allowed values are "none", "by_mouse", "by_keyboard", "text_editable"

        Args:
            types: text interaction mode to use

        Raises:
            ValueError: text interaction mode does not exist
        """
        for item in types:
            if item not in TEXT_INTERACTION:
                raise ValueError("Invalid text interaction mode")
        flags = functools.reduce(operator.ior, [TEXT_INTERACTION[t] for t in types])
        self.setTextInteractionFlags(flags)
        return self

    def get_text_interaction(self) -> List[str]:
        """returns current text interaction mode

        Possible values: "none", "by_mouse", "by_keyboard", "text_editable"

        Returns:
            list of text interaction modes
        """
        return [k for k, v in TEXT_INTERACTION.items() if v & self.textInteractionFlags()]

    def set_text(self, text: str):
        self.setText(text)
        return self

    def set_bold(self, bold: bool = True):
        font = self.font()
        font.setBold(bold)
        self.setFont(font)
        return self

    def set_italic(self, italic: bool = True):
        font = self.font()
        font.setItalic(italic)
        self.setFont(font)
        return self

    def set_point_size(self, size: int):
        font = self.font()
        font.setPointSize(size)
        self.setFont(font)
        return self

    def set_weight(self, weight: str):
        """sets the font weight

        Valid values are "thin", "extra_light", light", "medium", "demi_bold", "bold",
                         "extra_bold", normal", "black"

        Args:
            weight: font weight

        Raises:
            ValueError: invalid font weight
        """
        if weight not in WEIGHTS:
            raise ValueError(f"Invalid weight '{weight}'")
        font = self.font()
        font.setWeight(WEIGHTS[weight])
        self.setFont(font)
        return self

    def set_color(self, color: colors.ColorType):
        color = colors.get_color(color)
        self.setStyleSheet(f"color: {color.name()};")
        return self

    @contextlib.contextmanager
    def current_font(self):
        font = self.font()
        yield font
        self.setFont(font)

    def set_image(self, path: Union[pathlib.Path, str], width: int = 300):
        self.setScaledContents(True)
        self.set_alignment(horizontal="center")
        self.setText(
            "<html><head/><body><p>"
            f"<img src={str(path)!r} width={str(width)!r}/>"
            "</p></body></html>"
        )
        return self

    @classmethod
    def image_from_path(cls, path: Union[pathlib.Path, str], parent=None) -> "Label":
        pixmap = gui.Pixmap.from_file(path)
        label = cls(parent=parent)
        label.setPixmap(pixmap)
        label.resize(pixmap.width(), pixmap.height())
        return label


if __name__ == "__main__":
    app = widgets.app()
    widget = Label("http://www.test.de")
    widget.show()
    app.exec_()
