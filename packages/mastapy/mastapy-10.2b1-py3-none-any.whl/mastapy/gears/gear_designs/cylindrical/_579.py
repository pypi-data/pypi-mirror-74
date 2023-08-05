﻿'''_579.py

ScuffingCoefficientOfFrictionMethods
'''


from enum import Enum

from mastapy._internal.python_net import python_net_import

_SCUFFING_COEFFICIENT_OF_FRICTION_METHODS = python_net_import('SMT.MastaAPI.Gears.GearDesigns.Cylindrical', 'ScuffingCoefficientOfFrictionMethods')


__docformat__ = 'restructuredtext en'
__all__ = ('ScuffingCoefficientOfFrictionMethods',)


class ScuffingCoefficientOfFrictionMethods(Enum):
    '''ScuffingCoefficientOfFrictionMethods

    This is a mastapy class.

    Note:
        This class is an Enum.
    '''

    TYPE = _SCUFFING_COEFFICIENT_OF_FRICTION_METHODS
    __hash__ = None

    USER_DEFINED_CONSTANT = 0
    CALCULATED_CONSTANT = 1
    CALCULATED_VARIABLE = 2
