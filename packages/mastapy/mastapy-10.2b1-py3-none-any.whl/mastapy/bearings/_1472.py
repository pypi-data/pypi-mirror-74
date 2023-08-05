﻿'''_1472.py

ExponentAndReductionFactorsInISO16281Calculation
'''


from enum import Enum

from mastapy._internal.python_net import python_net_import

_EXPONENT_AND_REDUCTION_FACTORS_IN_ISO16281_CALCULATION = python_net_import('SMT.MastaAPI.Bearings', 'ExponentAndReductionFactorsInISO16281Calculation')


__docformat__ = 'restructuredtext en'
__all__ = ('ExponentAndReductionFactorsInISO16281Calculation',)


class ExponentAndReductionFactorsInISO16281Calculation(Enum):
    '''ExponentAndReductionFactorsInISO16281Calculation

    This is a mastapy class.

    Note:
        This class is an Enum.
    '''

    TYPE = _EXPONENT_AND_REDUCTION_FACTORS_IN_ISO16281_CALCULATION
    __hash__ = None

    DIVIDE_BY_EXPONENT_AND_REDUCTION_FACTORS = 0
    DONT_INCLUDE_EXPONENT_AND_REDUCTION_FACTORS = 1
