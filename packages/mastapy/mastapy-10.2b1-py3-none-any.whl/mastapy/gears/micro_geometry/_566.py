﻿'''_566.py

LocationOfEvaluationLowerLimit
'''


from enum import Enum

from mastapy._internal.python_net import python_net_import

_LOCATION_OF_EVALUATION_LOWER_LIMIT = python_net_import('SMT.MastaAPI.Gears.MicroGeometry', 'LocationOfEvaluationLowerLimit')


__docformat__ = 'restructuredtext en'
__all__ = ('LocationOfEvaluationLowerLimit',)


class LocationOfEvaluationLowerLimit(Enum):
    '''LocationOfEvaluationLowerLimit

    This is a mastapy class.

    Note:
        This class is an Enum.
    '''

    TYPE = _LOCATION_OF_EVALUATION_LOWER_LIMIT
    __hash__ = None

    USERSPECIFIED = 0
    ROOT_FORM = 1
    START_OF_ROOT_RELIEF = 2
