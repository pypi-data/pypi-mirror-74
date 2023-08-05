﻿'''_328.py

ZerolBevelGleasonToothTaperOption
'''


from enum import Enum

from mastapy._internal.python_net import python_net_import

_ZEROL_BEVEL_GLEASON_TOOTH_TAPER_OPTION = python_net_import('SMT.MastaAPI.Gears', 'ZerolBevelGleasonToothTaperOption')


__docformat__ = 'restructuredtext en'
__all__ = ('ZerolBevelGleasonToothTaperOption',)


class ZerolBevelGleasonToothTaperOption(Enum):
    '''ZerolBevelGleasonToothTaperOption

    This is a mastapy class.

    Note:
        This class is an Enum.
    '''

    TYPE = _ZEROL_BEVEL_GLEASON_TOOTH_TAPER_OPTION
    __hash__ = None

    DUPLEX_OLD = 0
    FINE_PITCH_ZEROL = 1
    COARSE_PITCH_ZEROL = 2
    USERSPECIFIED = 3
