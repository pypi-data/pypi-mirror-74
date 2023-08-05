#
# frontend_configuration.py
#
# This file is part of NEST.
#
# Copyright (C) 2004 The NEST Initiative
#
# NEST is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 2 of the License, or
# (at your option) any later version.
#
# NEST is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with NEST.  If not, see <http://www.gnu.org/licenses/>.
import argparse  # used for parsing of input arguments
import os
import re

import pynestml
from pynestml.codegeneration.codegenerator import CodeGenerator
from pynestml.exceptions.invalid_path_exception import InvalidPathException
from pynestml.exceptions.invalid_target_exception import InvalidTargetException
from pynestml.utils.logger import Logger
from pynestml.utils.logger import LoggingLevel
from pynestml.utils.messages import Messages, MessageCode

help_input_path = 'Path to a single file or a directory containing the source models.'
help_target_path = 'Path to a target directory where models should be generated to. Standard is "target".'
help_target = 'Name of the target platform to build code for. Default is NEST.'
help_logging = 'Indicates which messages shall be logged and printed to the screen. Standard is ERROR.'
help_module = 'Indicates the name of the module. Optional. If not indicated, the name of the directory containing the models is used'
help_log = 'Indicates whether a log file containing all messages shall be stored. Standard is NO.'
help_suffix = 'A suffix string that will be appended to the name of all generated models.'
help_dev = 'Enable development mode: code generation is attempted even for models that contain errors, and extra information is rendered in the generated code.'

qualifier_input_path_arg = '--input_path'
qualifier_target_path_arg = '--target_path'
qualifier_target_arg = '--target'
qualifier_logging_level_arg = '--logging_level'
qualifier_module_name_arg = '--module_name'
qualifier_store_log_arg = '--store_log'
qualifier_suffix_arg = '--suffix'
qualifier_dev_arg = '--dev'


class FrontendConfiguration(object):
    """
    This class encapsulates all settings as handed over to the frontend at start of the toolchain.
    """
    argument_parser = None
    paths_to_compilation_units = None
    provided_path = None
    logging_level = None
    target = None
    target_path = None
    module_name = None
    store_log = False
    suffix = ''
    is_dev = False

    @classmethod
    def parse_config(cls, args):
        """
        Standard constructor. This method parses the
        :param args: a set of arguments as handed over to the frontend
        :type args: list(str)
        """
        cls.argument_parser = argparse.ArgumentParser(
                description='''NESTML is a domain specific language that supports the specification of neuron
models in a precise and concise syntax, based on the syntax of Python. Model
equations can either be given as a simple string of mathematical notation or
as an algorithm written in the built-in procedural language. The equations are
analyzed by NESTML to compute an exact solution if possible or use an
appropriate numeric solver otherwise.

 Version ''' + str(pynestml.__version__), formatter_class=argparse.RawDescriptionHelpFormatter)

        cls.argument_parser.add_argument(qualifier_input_path_arg, metavar='PATH', type=str, help=help_input_path, required=True)
        cls.argument_parser.add_argument(qualifier_target_path_arg, metavar='PATH', type=str, help=help_target_path)
        cls.argument_parser.add_argument(qualifier_target_arg, choices=['NEST', 'autodoc', 'none'], type=str, help=help_target, default='NEST')
        cls.argument_parser.add_argument(qualifier_logging_level_arg, metavar='{INFO, WARNING, ERROR, NONE}', choices=['INFO', 'WARNING', 'WARNINGS', 'ERROR', 'ERRORS', 'NONE', 'NO'], type=str, help=help_logging, default='ERROR')
        cls.argument_parser.add_argument(qualifier_module_name_arg, metavar='NAME', type=str, help=help_module)
        cls.argument_parser.add_argument(qualifier_store_log_arg, action='store_true', help=help_log)
        cls.argument_parser.add_argument(qualifier_suffix_arg, metavar='SUFFIX', type=str, help=help_suffix, default='')
        cls.argument_parser.add_argument(qualifier_dev_arg, action='store_true', help=help_dev)
        parsed_args = cls.argument_parser.parse_args(args)

        # initialize the logger
        cls.logging_level = parsed_args.logging_level
        Logger.init_logger(Logger.string_to_level(parsed_args.logging_level))

        cls.handle_input_path(parsed_args.input_path)
        cls.handle_target(parsed_args.target)
        cls.handle_target_path(parsed_args.target_path)

        # parse or compose the module name
        if parsed_args.module_name is not None:
            if not parsed_args.module_name.endswith('module'):
                raise Exception('Invalid module name specified ("' + parsed_args.module_name + '"): the module name should end with the word "module"')
            if not re.match('[a-zA-Z_][a-zA-Z0-9_]*\Z', parsed_args.module_name):
                raise Exception('The specified module name ("' + parsed_args.module_name + '") cannot be parsed as a C variable name')
            cls.module_name = parsed_args.module_name
        elif os.path.isfile(parsed_args.input_path):
            cls.module_name = 'nestmlmodule'
            Logger.log_message(code=MessageCode.MODULE_NAME_INFO, message='No module name specified; the generated module will be named "' + cls.module_name + '"', log_level=LoggingLevel.INFO)
        elif os.path.isdir(parsed_args.input_path):
            cls.module_name = os.path.basename(os.path.normpath(parsed_args.input_path))
            if not re.match('[a-zA-Z_][a-zA-Z0-9_]*\Z', cls.module_name):
                raise Exception('No module name specified; tried to use the input directory name ("' + cls.module_name + '"), but it cannot be parsed as a C variable name')
            if not cls.module_name.endswith('module'):
                cls.module_name += 'module'
            Logger.log_message(code=MessageCode.MODULE_NAME_INFO, message='No module name specified; the generated module will be named "' + cls.module_name + '"', log_level=LoggingLevel.INFO)
        else:
            assert False # input_path should be either a file or a directory; failure should have been caught already by handle_input_path()

        cls.store_log = parsed_args.store_log
        cls.suffix = parsed_args.suffix
        cls.is_dev = parsed_args.dev

    @classmethod
    def get_path(cls):
        """
        Returns the path to the handed over directory or file.
        :return: a single path
        :rtype: str
        """
        return cls.provided_path

    @classmethod
    def get_files(cls):
        """
        Returns a list of all files to process.
        :return: a list of paths to files as str.
        :rtype: list(str)
        """
        return cls.paths_to_compilation_units

    @classmethod
    def get_target(cls):
        """
        Get the name of the target platform.
        :return: None or "" in case no code needs to be generated
        :rtype: str
        """
        return cls.target

    @classmethod
    def get_logging_level(cls):
        """
        Returns the set logging level.
        :return: the logging level
        :rtype: LoggingLevel
        """
        return cls.logging_level

    @classmethod
    def get_target_path(cls):
        """
        Returns the path to which models shall be generated to.
        :return: the target path.
        :rtype: str
        """
        return cls.target_path

    @classmethod
    def get_module_name(cls):
        """
        Returns the name of the module.
        :return: the name of the module.
        :rtype: str
        """
        return cls.module_name

    @classmethod
    def is_dev(cls):
        """
        Returns whether the development mode has been enabled.
        :return: True if development mode is enabled, otherwise False.
        :rtype: bool
        """
        return cls.is_dev

    @classmethod
    def handle_target(cls, target):
        if target is None or target.upper() == 'NONE':
            target = ''     # make sure `target` is always a string

        if target.upper() not in CodeGenerator.get_known_targets():
            code, message = Messages.get_unknown_target(target)
            Logger.log_message(None, code, message, None, LoggingLevel.ERROR)
            raise InvalidTargetException()

        cls.target = target

    @classmethod
    def handle_target_path(cls, path):
        # check if a target has been selected, otherwise set to `[pynestml directory]/target`
        if path is not None:
            if os.path.isabs(path):
                cls.target_path = path
            # a relative path, reconstruct it. get the parent dir where models, pynestml etc. is located
            else:
                pynestml_dir = os.getcwd()
                cls.target_path = os.path.join(pynestml_dir, path)
        else:
            cls.target_path = os.path.join(os.getcwd(), 'target')
            Logger.log_message(code=MessageCode.TARGET_PATH_INFO, log_level=LoggingLevel.INFO, message='Target files will be generated in directory \'' + cls.target_path + '\'')
        # check if the target path dir already exists
        if not os.path.isdir(cls.target_path):
            os.makedirs(cls.target_path)

    @classmethod
    def handle_input_path(cls, path):
        if path is None or path == '':
            # check if the mandatory path arg has been handed over, just terminate
            raise InvalidPathException('No input path specified.')

        cls.paths_to_compilation_units = list()
        if os.path.isabs(path):
            cls.provided_path = path
        else:
            # a relative path, reconstruct it. get the parent dir where models, pynestml etc. is located
            pynestml_dir = os.getcwd()
            cls.provided_path = os.path.join(pynestml_dir, path)

        if os.path.isfile(cls.provided_path):
            cls.paths_to_compilation_units.append(cls.provided_path)
        elif os.path.isdir(cls.provided_path):
            for filename in os.listdir(cls.provided_path):
                if filename.endswith('.nestml'):
                    cls.paths_to_compilation_units.append(os.path.join(cls.provided_path, filename))
        else:
            # input_path should be either a file or a directory
            code, message = Messages.get_input_path_not_found(path=cls.provided_path)
            Logger.log_message(code=code, message=message, log_level=LoggingLevel.ERROR)
            raise Exception(message)
