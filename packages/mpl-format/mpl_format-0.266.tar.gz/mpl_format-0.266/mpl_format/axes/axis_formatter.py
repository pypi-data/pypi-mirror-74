from matplotlib.axis import Axis
import matplotlib.pyplot as plt
from matplotlib.lines import Line2D
from matplotlib.text import Text
from matplotlib.ticker import StrMethodFormatter, FuncFormatter
from typing import Union, Dict, Callable

from mpl_format.compound_types import FontSize, Color
from mpl_format.text.text_formatter import TextFormatter
from mpl_format.text.text_list_formatter import TextListFormatter
from mpl_format.text.text_utils import wrap_text, map_text


class AxisFormatter(object):

    def __init__(self, axis: Axis):
        """
        Create a new AxisFormatter

        :param axis: The matplotlib Axis instance to wrap.
        """
        self._axis: Axis = axis
        self._label: TextFormatter = TextFormatter(self._axis.label)

    @property
    def axis(self) -> Axis:
        """
        Return the wrapped matplotlib Axis object.
        """
        return self._axis

    @property
    def label(self) -> TextFormatter:
        """
        Return a TextFormatter wrapping the axis label.
        """
        return self._label

    @property
    def tick_labels(self) -> TextListFormatter:

        return TextListFormatter([
            TextFormatter(text) for text in self._axis.get_ticklabels()
        ])

    def set_tick_color(self, color: Color) -> 'AxisFormatter':

        tick: Line2D
        for tick in self._axis.get_ticklines():
            tick.set_color(color=color)

        return self

    # region labels

    def set_label_text(self, text: str) -> 'AxisFormatter':
        """
        Set the text of the Axis label.

        :param text: Text for the Axis label.
        """
        self.label.set_text(text)
        return self

    def set_label_font_family(self, font_name: str) -> 'AxisFormatter':
        """
        Set the font family for the Axis label.

        :param font_name: Name of the font to use.
        """
        self.label.set_font_family(font_name)
        return self

    def replace_label_text(self, old: str, new: str) -> 'AxisFormatter':
        """
        Replace the old label text with the new.

        :param old: The old label text to replace.
        :param new: The new label text to replace.
        """
        self.label.replace(old=old, new=new)
        return self

    def map_label_text(
            self, mapping: Union[Dict[str, str], Callable[[str], str]]
    ) -> 'AxisFormatter':
        """
        Map the label text using a dictionary or function.

        :param mapping: Dictionary or a function mapping old text to new text.
        """
        self.label.map(mapping)
        return self

    def rotate_label(
            self, rotation: int, how: str = 'absolute'
    ) -> 'AxisFormatter':
        """
        Set the rotation of the axis label.

        :param rotation: The rotation value to set in degrees.
        :param how: 'absolute' or 'relative'
        """
        self.label.rotate(rotation, how)
        return self

    def remove_label(self) -> 'AxisFormatter':
        """
        Remove the Axis label.
        """
        self.set_label_text('')
        return self

    def wrap_label(self, max_width: int) -> 'AxisFormatter':
        """
        Wrap the axis label text if it exceeds a given width of characters.

        :param max_width: The maximum character width per line.
        """
        self.label.wrap(max_width=max_width)
        return self

    def set_label_size(self, font_size: FontSize) -> 'AxisFormatter':
        """
        Set the font size for the axis label.

        :param font_size: The font size in points or size name.
        """
        self.label.set_size(font_size)
        return self

    # endregion

    # region tick labels

    def rotate_tick_labels(
            self, rotation: int, how: str = 'absolute'
    ) -> 'AxisFormatter':
        """
        Set the rotation of axis tick labels.

        :param rotation: The rotation value to set in degrees.
        :param how: 'absolute' or 'relative'
        """
        label: Text
        if self._axis.get_majorticklabels():
            for label in self._axis.get_majorticklabels():
                if how == 'relative':
                    label.set_rotation(label.get_rotation() + rotation)
                else:
                    label.set_rotation(label.get_rotation())
            plt.setp(self._axis.get_majorticklabels(), rotation=rotation)
        if self._axis.get_minorticklabels():
            plt.setp(self._axis.get_minorticklabels(), rotation=rotation)
        return self

    def wrap_tick_labels(self, max_width: int) -> 'AxisFormatter':
        """
        Wrap the text for each tick label with new lines if it exceeds
        a given width of characters.

        :param max_width: The maximum character width per line.
        """
        self._axis.set_ticklabels([
            wrap_text(text, max_width)
            for text in self._axis.get_ticklabels()
        ])
        return self

    def set_format_integer(self, separator: str = ',') -> 'AxisFormatter':
        """
        Format an axis with currency symbols and separators.

        :param separator: The symbol to separate each group of 3 digits.
        """
        fmt = '{x:%s.0f}' % separator
        tick = StrMethodFormatter(fmt)
        self._axis.set_major_formatter(tick)
        return self

    def set_format_currency(
            self, symbol: str = '$', num_decimals: int = 0
    ) -> 'AxisFormatter':
        """
        Format an axis with currency symbols and separators.

        :param symbol: The currency symbol to use.
        :param num_decimals: The number of decimal places to use
                             (typically 0 or 2).
        """
        fmt = '%s{x:,.%sf}' % (symbol, num_decimals)
        tick = StrMethodFormatter(fmt)
        self._axis.set_major_formatter(tick)
        return self

    def set_format_percent(self, num_decimals: int = 0,
                           multiply_100: bool = True) -> 'AxisFormatter':
        """
        Format an axis as a percentage.

        :param num_decimals: Number of decimal places for the resulting label.
        :param multiply_100: Whether to multiply the existing value by 100
                             before formatting.
        """
        def percent_formatter(s, _):
            s = float(s)
            if multiply_100:
                s *= 100
            return f'{s:.{num_decimals}f}%'

        self._axis.set_major_formatter(FuncFormatter(percent_formatter))
        return self

    def set_tick_label_size(self, font_size: FontSize) -> 'AxisFormatter':
        """
        Set the font size for the axis tick labels.

        :param font_size: The font size in points or size name.
        """
        self._axis.set_tick_params(labelsize=font_size)
        return self

    def map_tick_label_text(
            self, mapping: Union[Dict[str, str], Callable[[str], str]]
    ) -> 'AxisFormatter':
        """
        Map the tick label text using a dictionary or function.

        :param mapping: Dictionary or a function mapping old text to new text.
        """
        labels = [label.get_text() for label in self._axis.get_ticklabels()]
        self._axis.set_ticklabels(map_text(labels, mapping))
        return self

    # endregion

    # region set scale

    def set_scale(self, scale: str) -> 'AxisFormatter':
        """
        Set the scale for the Axis.

        :param scale: One of ['log', 'linear', 'symlog', 'logit']
        """
        self._axis._set_scale(scale)
        return self

    def set_scale_log(self) -> 'AxisFormatter':
        """
        Set the scale of the axis to logarithmic.
        """
        self.set_scale('log')
        return self

    def set_scale_linear(self) -> 'AxisFormatter':
        """
        Set the scale of the axis to logarithmic.
        """
        self.set_scale('linear')
        return self

    def set_scale_symmetrical_log(self) -> 'AxisFormatter':
        """
        Set the scale of the axis to symmetrical logarithmic.
        """
        self.set_scale('symlog')
        return self

    def set_scale_logit(self) -> 'AxisFormatter':
        """
        Set the scale of the axis to logit.
        """
        self.set_scale('logit')
        return self

    # endregion

    # region inversion

    def set_inverted(self, inverted: bool = True) -> 'AxisFormatter':
        """
        Set the Axis inversion property.

        :param inverted: True or False.
        """
        self._axis.set_inverted(inverted=inverted)
        return self

    def invert(self) -> 'AxisFormatter':
        """
        Flip the Axis inversion property.
        """
        self._axis.set_inverted(inverted=not self._axis.get_inverted())
        return self

    # endregion
