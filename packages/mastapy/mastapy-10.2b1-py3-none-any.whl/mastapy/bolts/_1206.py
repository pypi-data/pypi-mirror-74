﻿'''_1206.py

RolledBeforeOrAfterHeatTreament
'''


from enum import Enum

from mastapy._internal.python_net import python_net_import

_ROLLED_BEFORE_OR_AFTER_HEAT_TREAMENT = python_net_import('SMT.MastaAPI.Bolts', 'RolledBeforeOrAfterHeatTreament')


__docformat__ = 'restructuredtext en'
__all__ = ('RolledBeforeOrAfterHeatTreament',)


class RolledBeforeOrAfterHeatTreament(Enum):
    '''RolledBeforeOrAfterHeatTreament

    This is a mastapy class.

    Note:
        This class is an Enum.
    '''

    TYPE = _ROLLED_BEFORE_OR_AFTER_HEAT_TREAMENT
    __hash__ = None

    ROLLED_BEFORE_HEAT_TREATMENT = 0
    ROLLED_AFTER_HEAT_TREATMENT = 1
