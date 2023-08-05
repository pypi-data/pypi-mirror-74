"""
Create experimental environment for vivado HLS 
"""

import logging
import typing
from enum import Enum
from pathlib import Path
import shutil

from . import vivado_hls_tcl as vtcl
from . import vivado_report as vrpt
from .tmpdir import TmpDirManager
from .utils import run_script

_define = typing.Union[str, typing.Tuple[str, str]]
_include = str
_define_list = typing.List[_define]
_include_list = typing.List[_include]
_opt_str = typing.Optional[str]


class ExperienceType(Enum):
    CSYNTH_ONLY = 0
    SYNTHESIS = 1
    IMPLEMENTATION = 2


class HDL(Enum):
    VHDL = (0, "vhdl", "vhd")
    VERILOG = (1, "verilog", "v")

    def __init__(self, *vals):
        self._name = vals[1]
        self._extension = vals[2]

    def get_name(self):
        return self._name

    def get_extension(self):
        return self._extension


class Experiment:
    def __init__(self,
                 exp_name: str,
                 comp_path: str,
                 comp_name: str,
                 clock_period: int,
                 part: str,
                 standard: str,
                 hdl: HDL,
                 exp_type: ExperienceType,
                 keep_env: bool = False,
                 description: _opt_str = None,
                 version: _opt_str = None,
                 ip_lib: _opt_str = None,
                 vendor: _opt_str = None,
                 logger=None
                 ):
        self._comp_path = comp_path
        self._comp_name = comp_name
        self._clock_period = clock_period
        self._exp_type = exp_type
        self._part = part
        self._standard = standard
        self._includes = []
        self._defines = []
        self._description = description
        self._vendor = vendor
        self._ip_lib = ip_lib
        self._version = version
        self._logger = logger if logger is not None else logging.getLogger("vrs_log")
        self._hdl = hdl
        self._csynth_res = None
        self._syn_impl_res = None
        self._keep_env = keep_env
        self._exp_name = exp_name

    @property
    def clock_period(self):
        return self._clock_period

    @property 
    def name(self):
        return self._exp_name

    def add_includes(self, includes: _include_list):
        self._includes.extend(includes)

    def add_defines(self, defines: _define_list):
        self._defines.extend(defines)

    def _generate_script(self, vivado_script: Path, pipeline: bool, depth_constraint:typing.Optional[int] = None):
        with vivado_script.open('w') as vs:
            vtcl.create_project(vs,
                                "vivado_hls_synthesis",
                                "comp.cpp",
                                self._comp_name,
                                self._includes,
                                self._defines,
                                self._standard,
                                "solution",
                                self._part,
                                self._clock_period,
                                pipeline,
                                depth_constraint
                                )
            vtcl.csynth_solution_script(vs)
            if self._exp_type == ExperienceType.CSYNTH_ONLY:
                return
            vtcl.export_ip_script(
                vs,
                self._exp_type == ExperienceType.IMPLEMENTATION,
                self._hdl.get_name(),
                display_name=self._comp_name,
                descr=self._description,
                version=self._version,
                vendor=self._vendor,
                ip_lib=self._ip_lib
            )

    def run_exp(self, 
                depth_constraint: typing.Optional[int] = None, 
                suffix: str="", 
                before_del = None
               ):
        logger = self._logger
        logger.info(f"Experiment: {self._exp_name}{suffix}")
        comp = Path(self._comp_path).resolve()
        if not comp.exists():
            raise FileNotFoundError(f"Error when starting experiment: component file {comp} does not exist")
        with TmpDirManager(self._exp_name, not self._keep_env):
            comp_copy = Path("comp.cpp")
            shutil.copyfile(comp, comp_copy)

            vivado_script = Path("vivado_hls_script.tcl")
            pipeline = depth_constraint is None or depth_constraint > 1
            self._generate_script(vivado_script, pipeline, depth_constraint)
            run_script(vivado_script)

            vivado_hls_rpt = (Path() / "vivado_hls_synthesis" / "solution" /
                            "syn" / "report" /
                              f"{self._comp_name}_csynth.xml").resolve()

            self._csynth_res = vrpt.parse_syn_report(vivado_hls_rpt)
            if self._exp_type != ExperienceType.CSYNTH_ONLY:
                root = Path() / "vivado_hls_synthesis" / "solution" / "impl" 
                vivado_report = (root / "report" / f"{self._hdl.get_name()}"
                                 / f"{self._comp_name}_export.xml").resolve()
                report_suffix_to_use = ("routed" if self._exp_type ==
                                        ExperienceType.IMPLEMENTATION else
                                        "synth")
                vivado_timing_rpt = (root / self._hdl.get_name() / "report" /
                                     f'{self._comp_name}_timing_{report_suffix_to_use}.rpt').resolve()
                self._syn_impl_res = vrpt.parse_impl_report(vivado_report, vivado_timing_rpt)

            if before_del is not None:
                befor_del()
        return self

    def get_results(self):
        return {"syn": self._csynth_res, "impl": self._syn_impl_res}
