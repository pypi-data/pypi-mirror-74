﻿'''_3763.py

CoaxialConnectionGearWhineAnalysis
'''


from mastapy.system_model.connections_and_sockets import _1761
from mastapy._internal import constructor
from mastapy.system_model.analyses_and_results.static_loads import _2214
from mastapy.system_model.analyses_and_results.system_deflections import _2157
from mastapy.system_model.analyses_and_results.gear_whine_analyses import _3768
from mastapy._internal.python_net import python_net_import

_COAXIAL_CONNECTION_GEAR_WHINE_ANALYSIS = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.GearWhineAnalyses', 'CoaxialConnectionGearWhineAnalysis')


__docformat__ = 'restructuredtext en'
__all__ = ('CoaxialConnectionGearWhineAnalysis',)


class CoaxialConnectionGearWhineAnalysis(_3768.ShaftToMountableComponentConnectionGearWhineAnalysis):
    '''CoaxialConnectionGearWhineAnalysis

    This is a mastapy class.
    '''

    TYPE = _COAXIAL_CONNECTION_GEAR_WHINE_ANALYSIS
    __hash__ = None

    def __init__(self, instance_to_wrap: 'CoaxialConnectionGearWhineAnalysis.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def connection_design(self) -> '_1761.CoaxialConnection':
        '''CoaxialConnection: 'ConnectionDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_1761.CoaxialConnection)(self.wrapped.ConnectionDesign) if self.wrapped.ConnectionDesign else None

    @property
    def connection_load_case(self) -> '_2214.CoaxialConnectionLoadCase':
        '''CoaxialConnectionLoadCase: 'ConnectionLoadCase' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_2214.CoaxialConnectionLoadCase)(self.wrapped.ConnectionLoadCase) if self.wrapped.ConnectionLoadCase else None

    @property
    def system_deflection_results(self) -> '_2157.CoaxialConnectionSystemDeflection':
        '''CoaxialConnectionSystemDeflection: 'SystemDeflectionResults' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_2157.CoaxialConnectionSystemDeflection)(self.wrapped.SystemDeflectionResults) if self.wrapped.SystemDeflectionResults else None
