﻿'''_5658.py

GearWhineAnalysisResultsPropertyAccessor
'''


from typing import List

from mastapy.system_model.analyses_and_results.gear_whine_analyses.reportable_property_results import _5663, _5659
from mastapy._internal import constructor, conversion
from mastapy import _0
from mastapy._internal.python_net import python_net_import

_GEAR_WHINE_ANALYSIS_RESULTS_PROPERTY_ACCESSOR = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.GearWhineAnalyses.ReportablePropertyResults', 'GearWhineAnalysisResultsPropertyAccessor')


__docformat__ = 'restructuredtext en'
__all__ = ('GearWhineAnalysisResultsPropertyAccessor',)


class GearWhineAnalysisResultsPropertyAccessor(_0.APIBase):
    '''GearWhineAnalysisResultsPropertyAccessor

    This is a mastapy class.
    '''

    TYPE = _GEAR_WHINE_ANALYSIS_RESULTS_PROPERTY_ACCESSOR

    __hash__ = None

    def __init__(self, instance_to_wrap: 'GearWhineAnalysisResultsPropertyAccessor.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def excitations(self) -> 'List[_5663.SingleWhineAnalysisResultsPropertyAccessor]':
        '''List[SingleWhineAnalysisResultsPropertyAccessor]: 'Excitations' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.Excitations, constructor.new(_5663.SingleWhineAnalysisResultsPropertyAccessor))
        return value

    @property
    def orders_for_combined_excitations(self) -> 'List[_5659.ResultsForOrder]':
        '''List[ResultsForOrder]: 'OrdersForCombinedExcitations' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.OrdersForCombinedExcitations, constructor.new(_5659.ResultsForOrder))
        return value
