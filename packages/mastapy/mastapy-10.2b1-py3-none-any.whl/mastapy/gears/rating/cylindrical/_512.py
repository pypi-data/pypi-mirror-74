﻿'''_512.py

ToothThicknesses
'''


from enum import Enum

from mastapy._internal.python_net import python_net_import

_TOOTH_THICKNESSES = python_net_import('SMT.MastaAPI.Gears.Rating.Cylindrical', 'ToothThicknesses')


__docformat__ = 'restructuredtext en'
__all__ = ('ToothThicknesses',)


class ToothThicknesses(Enum):
    '''ToothThicknesses

    This is a mastapy class.

    Note:
        This class is an Enum.
    '''

    TYPE = _TOOTH_THICKNESSES
    __hash__ = None

    DESIGN_ZERO_BACKLASH = 0
    MINIMUM = 1
    AVERAGE = 2
    MAXIMUM = 3
