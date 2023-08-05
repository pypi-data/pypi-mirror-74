﻿'''_3518.py

CVTBeltConnectionParametricStudyTool
'''


from mastapy.system_model.connections_and_sockets import _1852
from mastapy._internal import constructor
from mastapy.system_model.analyses_and_results.parametric_study_tools import _3487
from mastapy._internal.python_net import python_net_import

_CVT_BELT_CONNECTION_PARAMETRIC_STUDY_TOOL = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.ParametricStudyTools', 'CVTBeltConnectionParametricStudyTool')


__docformat__ = 'restructuredtext en'
__all__ = ('CVTBeltConnectionParametricStudyTool',)


class CVTBeltConnectionParametricStudyTool(_3487.BeltConnectionParametricStudyTool):
    '''CVTBeltConnectionParametricStudyTool

    This is a mastapy class.
    '''

    TYPE = _CVT_BELT_CONNECTION_PARAMETRIC_STUDY_TOOL

    __hash__ = None

    def __init__(self, instance_to_wrap: 'CVTBeltConnectionParametricStudyTool.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def connection_design(self) -> '_1852.CVTBeltConnection':
        '''CVTBeltConnection: 'ConnectionDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_1852.CVTBeltConnection)(self.wrapped.ConnectionDesign) if self.wrapped.ConnectionDesign else None
