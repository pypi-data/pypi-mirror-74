﻿'''_2663.py

DatumCompoundDynamicAnalysis
'''


from typing import List

from mastapy.system_model.part_model import _1916
from mastapy._internal import constructor, conversion
from mastapy.system_model.analyses_and_results.dynamic_analyses import _3680
from mastapy.system_model.analyses_and_results.dynamic_analyses.compound import _2661
from mastapy._internal.python_net import python_net_import

_DATUM_COMPOUND_DYNAMIC_ANALYSIS = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.DynamicAnalyses.Compound', 'DatumCompoundDynamicAnalysis')


__docformat__ = 'restructuredtext en'
__all__ = ('DatumCompoundDynamicAnalysis',)


class DatumCompoundDynamicAnalysis(_2661.ComponentCompoundDynamicAnalysis):
    '''DatumCompoundDynamicAnalysis

    This is a mastapy class.
    '''

    TYPE = _DATUM_COMPOUND_DYNAMIC_ANALYSIS
    __hash__ = None

    def __init__(self, instance_to_wrap: 'DatumCompoundDynamicAnalysis.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def component_design(self) -> '_1916.Datum':
        '''Datum: 'ComponentDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_1916.Datum)(self.wrapped.ComponentDesign) if self.wrapped.ComponentDesign else None

    @property
    def load_case_analyses_ready(self) -> 'List[_3680.DatumDynamicAnalysis]':
        '''List[DatumDynamicAnalysis]: 'LoadCaseAnalysesReady' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.LoadCaseAnalysesReady, constructor.new(_3680.DatumDynamicAnalysis))
        return value

    @property
    def component_dynamic_analysis_load_cases(self) -> 'List[_3680.DatumDynamicAnalysis]':
        '''List[DatumDynamicAnalysis]: 'ComponentDynamicAnalysisLoadCases' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.ComponentDynamicAnalysisLoadCases, constructor.new(_3680.DatumDynamicAnalysis))
        return value
