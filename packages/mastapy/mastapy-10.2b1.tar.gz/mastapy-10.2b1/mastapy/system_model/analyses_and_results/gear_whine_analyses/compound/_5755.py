﻿'''_5755.py

MeasurementComponentCompoundGearWhineAnalysis
'''


from typing import List

from mastapy.system_model.part_model import _2021
from mastapy._internal import constructor, conversion
from mastapy.system_model.analyses_and_results.gear_whine_analyses import _5362
from mastapy.system_model.analyses_and_results.gear_whine_analyses.compound import _5799
from mastapy._internal.python_net import python_net_import

_MEASUREMENT_COMPONENT_COMPOUND_GEAR_WHINE_ANALYSIS = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.GearWhineAnalyses.Compound', 'MeasurementComponentCompoundGearWhineAnalysis')


__docformat__ = 'restructuredtext en'
__all__ = ('MeasurementComponentCompoundGearWhineAnalysis',)


class MeasurementComponentCompoundGearWhineAnalysis(_5799.VirtualComponentCompoundGearWhineAnalysis):
    '''MeasurementComponentCompoundGearWhineAnalysis

    This is a mastapy class.
    '''

    TYPE = _MEASUREMENT_COMPONENT_COMPOUND_GEAR_WHINE_ANALYSIS

    __hash__ = None

    def __init__(self, instance_to_wrap: 'MeasurementComponentCompoundGearWhineAnalysis.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def component_design(self) -> '_2021.MeasurementComponent':
        '''MeasurementComponent: 'ComponentDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_2021.MeasurementComponent)(self.wrapped.ComponentDesign) if self.wrapped.ComponentDesign else None

    @property
    def load_case_analyses_ready(self) -> 'List[_5362.MeasurementComponentGearWhineAnalysis]':
        '''List[MeasurementComponentGearWhineAnalysis]: 'LoadCaseAnalysesReady' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.LoadCaseAnalysesReady, constructor.new(_5362.MeasurementComponentGearWhineAnalysis))
        return value

    @property
    def component_gear_whine_analysis_load_cases(self) -> 'List[_5362.MeasurementComponentGearWhineAnalysis]':
        '''List[MeasurementComponentGearWhineAnalysis]: 'ComponentGearWhineAnalysisLoadCases' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.ComponentGearWhineAnalysisLoadCases, constructor.new(_5362.MeasurementComponentGearWhineAnalysis))
        return value
