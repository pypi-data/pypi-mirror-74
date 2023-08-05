﻿'''_5330.py

FaceGearGearWhineAnalysis
'''


from mastapy.system_model.part_model.gears import _2084
from mastapy._internal import constructor
from mastapy.system_model.analyses_and_results.static_loads import _6133
from mastapy.system_model.analyses_and_results.system_deflections import _2283
from mastapy.system_model.analyses_and_results.gear_whine_analyses import _5335
from mastapy._internal.python_net import python_net_import

_FACE_GEAR_GEAR_WHINE_ANALYSIS = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.GearWhineAnalyses', 'FaceGearGearWhineAnalysis')


__docformat__ = 'restructuredtext en'
__all__ = ('FaceGearGearWhineAnalysis',)


class FaceGearGearWhineAnalysis(_5335.GearGearWhineAnalysis):
    '''FaceGearGearWhineAnalysis

    This is a mastapy class.
    '''

    TYPE = _FACE_GEAR_GEAR_WHINE_ANALYSIS

    __hash__ = None

    def __init__(self, instance_to_wrap: 'FaceGearGearWhineAnalysis.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def component_design(self) -> '_2084.FaceGear':
        '''FaceGear: 'ComponentDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_2084.FaceGear)(self.wrapped.ComponentDesign) if self.wrapped.ComponentDesign else None

    @property
    def component_load_case(self) -> '_6133.FaceGearLoadCase':
        '''FaceGearLoadCase: 'ComponentLoadCase' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_6133.FaceGearLoadCase)(self.wrapped.ComponentLoadCase) if self.wrapped.ComponentLoadCase else None

    @property
    def system_deflection_results(self) -> '_2283.FaceGearSystemDeflection':
        '''FaceGearSystemDeflection: 'SystemDeflectionResults' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_2283.FaceGearSystemDeflection)(self.wrapped.SystemDeflectionResults) if self.wrapped.SystemDeflectionResults else None
