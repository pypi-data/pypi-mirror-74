﻿'''_3506.py

GuideDxfModelCompoundPowerFlow
'''


from typing import List

from mastapy.system_model.part_model import _1921
from mastapy._internal import constructor, conversion
from mastapy.system_model.analyses_and_results.power_flows import _4156
from mastapy.system_model.analyses_and_results.power_flows.compound import _3500
from mastapy._internal.python_net import python_net_import

_GUIDE_DXF_MODEL_COMPOUND_POWER_FLOW = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.PowerFlows.Compound', 'GuideDxfModelCompoundPowerFlow')


__docformat__ = 'restructuredtext en'
__all__ = ('GuideDxfModelCompoundPowerFlow',)


class GuideDxfModelCompoundPowerFlow(_3500.ComponentCompoundPowerFlow):
    '''GuideDxfModelCompoundPowerFlow

    This is a mastapy class.
    '''

    TYPE = _GUIDE_DXF_MODEL_COMPOUND_POWER_FLOW
    __hash__ = None

    def __init__(self, instance_to_wrap: 'GuideDxfModelCompoundPowerFlow.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def component_design(self) -> '_1921.GuideDxfModel':
        '''GuideDxfModel: 'ComponentDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_1921.GuideDxfModel)(self.wrapped.ComponentDesign) if self.wrapped.ComponentDesign else None

    @property
    def load_case_analyses_ready(self) -> 'List[_4156.GuideDxfModelPowerFlow]':
        '''List[GuideDxfModelPowerFlow]: 'LoadCaseAnalysesReady' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.LoadCaseAnalysesReady, constructor.new(_4156.GuideDxfModelPowerFlow))
        return value

    @property
    def component_power_flow_load_cases(self) -> 'List[_4156.GuideDxfModelPowerFlow]':
        '''List[GuideDxfModelPowerFlow]: 'ComponentPowerFlowLoadCases' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.ComponentPowerFlowLoadCases, constructor.new(_4156.GuideDxfModelPowerFlow))
        return value
