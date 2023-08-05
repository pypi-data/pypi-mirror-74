﻿'''_3502.py

DatumCompoundPowerFlow
'''


from typing import List

from mastapy.system_model.part_model import _1916
from mastapy._internal import constructor, conversion
from mastapy.system_model.analyses_and_results.power_flows import _4152
from mastapy.system_model.analyses_and_results.power_flows.compound import _3500
from mastapy._internal.python_net import python_net_import

_DATUM_COMPOUND_POWER_FLOW = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.PowerFlows.Compound', 'DatumCompoundPowerFlow')


__docformat__ = 'restructuredtext en'
__all__ = ('DatumCompoundPowerFlow',)


class DatumCompoundPowerFlow(_3500.ComponentCompoundPowerFlow):
    '''DatumCompoundPowerFlow

    This is a mastapy class.
    '''

    TYPE = _DATUM_COMPOUND_POWER_FLOW
    __hash__ = None

    def __init__(self, instance_to_wrap: 'DatumCompoundPowerFlow.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def component_design(self) -> '_1916.Datum':
        '''Datum: 'ComponentDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_1916.Datum)(self.wrapped.ComponentDesign) if self.wrapped.ComponentDesign else None

    @property
    def load_case_analyses_ready(self) -> 'List[_4152.DatumPowerFlow]':
        '''List[DatumPowerFlow]: 'LoadCaseAnalysesReady' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.LoadCaseAnalysesReady, constructor.new(_4152.DatumPowerFlow))
        return value

    @property
    def component_power_flow_load_cases(self) -> 'List[_4152.DatumPowerFlow]':
        '''List[DatumPowerFlow]: 'ComponentPowerFlowLoadCases' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.ComponentPowerFlowLoadCases, constructor.new(_4152.DatumPowerFlow))
        return value
