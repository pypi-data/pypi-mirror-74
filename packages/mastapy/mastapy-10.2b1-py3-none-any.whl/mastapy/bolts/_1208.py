﻿'''_1208.py

StrengthGrades
'''


from enum import Enum

from mastapy._internal.python_net import python_net_import

_STRENGTH_GRADES = python_net_import('SMT.MastaAPI.Bolts', 'StrengthGrades')


__docformat__ = 'restructuredtext en'
__all__ = ('StrengthGrades',)


class StrengthGrades(Enum):
    '''StrengthGrades

    This is a mastapy class.

    Note:
        This class is an Enum.
    '''

    TYPE = _STRENGTH_GRADES
    __hash__ = None

    _129 = 0
    _109 = 1
    _88 = 2
    OTHER = 3
