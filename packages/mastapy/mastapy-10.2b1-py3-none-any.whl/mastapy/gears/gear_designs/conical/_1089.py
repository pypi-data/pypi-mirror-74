﻿'''_1089.py

CutterGaugeLengths
'''


from enum import Enum

from mastapy._internal.python_net import python_net_import

_CUTTER_GAUGE_LENGTHS = python_net_import('SMT.MastaAPI.Gears.GearDesigns.Conical', 'CutterGaugeLengths')


__docformat__ = 'restructuredtext en'
__all__ = ('CutterGaugeLengths',)


class CutterGaugeLengths(Enum):
    '''CutterGaugeLengths

    This is a mastapy class.

    Note:
        This class is an Enum.
    '''

    TYPE = _CUTTER_GAUGE_LENGTHS
    __hash__ = None

    _1143MM = 0
    _92075MM = 1
