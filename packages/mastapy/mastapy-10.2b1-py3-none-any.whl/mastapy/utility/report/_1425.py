﻿'''_1425.py

FontWeight
'''


from enum import Enum

from mastapy._internal.python_net import python_net_import

_FONT_WEIGHT = python_net_import('SMT.MastaAPI.Utility.Report', 'FontWeight')


__docformat__ = 'restructuredtext en'
__all__ = ('FontWeight',)


class FontWeight(Enum):
    '''FontWeight

    This is a mastapy class.

    Note:
        This class is an Enum.
    '''

    TYPE = _FONT_WEIGHT
    __hash__ = None

    NORMAL = 0
    BOLD = 1
