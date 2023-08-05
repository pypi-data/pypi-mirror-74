﻿'''_5258.py

BearingGearWhineAnalysis
'''


from typing import List

from mastapy.bearings.bearing_results.rolling import _1683
from mastapy._internal import constructor, conversion
from mastapy.system_model.part_model import _1985
from mastapy.system_model.analyses_and_results.static_loads import _6053
from mastapy.system_model.analyses_and_results.system_deflections import _2213
from mastapy.system_model.analyses_and_results.gear_whine_analyses import _5287
from mastapy._internal.python_net import python_net_import

_BEARING_GEAR_WHINE_ANALYSIS = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.GearWhineAnalyses', 'BearingGearWhineAnalysis')


__docformat__ = 'restructuredtext en'
__all__ = ('BearingGearWhineAnalysis',)


class BearingGearWhineAnalysis(_5287.ConnectorGearWhineAnalysis):
    '''BearingGearWhineAnalysis

    This is a mastapy class.
    '''

    TYPE = _BEARING_GEAR_WHINE_ANALYSIS

    __hash__ = None

    def __init__(self, instance_to_wrap: 'BearingGearWhineAnalysis.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def rolling_bearing_speed_results(self) -> '_1683.RollingBearingSpeedResults':
        '''RollingBearingSpeedResults: 'RollingBearingSpeedResults' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_1683.RollingBearingSpeedResults)(self.wrapped.RollingBearingSpeedResults) if self.wrapped.RollingBearingSpeedResults else None

    @property
    def component_design(self) -> '_1985.Bearing':
        '''Bearing: 'ComponentDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_1985.Bearing)(self.wrapped.ComponentDesign) if self.wrapped.ComponentDesign else None

    @property
    def component_load_case(self) -> '_6053.BearingLoadCase':
        '''BearingLoadCase: 'ComponentLoadCase' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_6053.BearingLoadCase)(self.wrapped.ComponentLoadCase) if self.wrapped.ComponentLoadCase else None

    @property
    def system_deflection_results(self) -> '_2213.BearingSystemDeflection':
        '''BearingSystemDeflection: 'SystemDeflectionResults' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_2213.BearingSystemDeflection)(self.wrapped.SystemDeflectionResults) if self.wrapped.SystemDeflectionResults else None

    @property
    def planetaries(self) -> 'List[BearingGearWhineAnalysis]':
        '''List[BearingGearWhineAnalysis]: 'Planetaries' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.Planetaries, constructor.new(BearingGearWhineAnalysis))
        return value
