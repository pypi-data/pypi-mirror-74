﻿'''_1136.py

HeatTreatmentTypes
'''


from enum import Enum

from mastapy._internal.python_net import python_net_import

_HEAT_TREATMENT_TYPES = python_net_import('SMT.MastaAPI.DetailedRigidConnectors.Splines', 'HeatTreatmentTypes')


__docformat__ = 'restructuredtext en'
__all__ = ('HeatTreatmentTypes',)


class HeatTreatmentTypes(Enum):
    '''HeatTreatmentTypes

    This is a mastapy class.

    Note:
        This class is an Enum.
    '''

    TYPE = _HEAT_TREATMENT_TYPES
    __hash__ = None

    NO_HEAT_TREATMENT = 0
    QUENCHED_TEMPERED = 1
    SURFACE_HARDENED = 2
    NITRIDED = 3
    CARBURIZED = 4
