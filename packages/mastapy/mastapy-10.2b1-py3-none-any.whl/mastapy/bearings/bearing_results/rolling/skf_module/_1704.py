﻿'''_1704.py

Friction
'''


from mastapy._internal import constructor
from mastapy.bearings.bearing_results.rolling.skf_module import _1705, _1706, _1715
from mastapy._internal.python_net import python_net_import

_FRICTION = python_net_import('SMT.MastaAPI.Bearings.BearingResults.Rolling.SkfModule', 'Friction')


__docformat__ = 'restructuredtext en'
__all__ = ('Friction',)


class Friction(_1715.SKFCalculationResult):
    '''Friction

    This is a mastapy class.
    '''

    TYPE = _FRICTION

    __hash__ = None

    def __init__(self, instance_to_wrap: 'Friction.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def power_loss(self) -> 'float':
        '''float: 'PowerLoss' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return self.wrapped.PowerLoss

    @property
    def frictional_moment(self) -> '_1705.FrictionalMoment':
        '''FrictionalMoment: 'FrictionalMoment' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_1705.FrictionalMoment)(self.wrapped.FrictionalMoment) if self.wrapped.FrictionalMoment else None

    @property
    def friction_sources(self) -> '_1706.FrictionSources':
        '''FrictionSources: 'FrictionSources' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_1706.FrictionSources)(self.wrapped.FrictionSources) if self.wrapped.FrictionSources else None
