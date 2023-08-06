
import os
import importlib
import inspect

from . import junit
from . import report
from . import utils


def get_python_modules_from_directory(sDirectoryName, lModules):
    '''
    Returns a list of files with an extension of py from a directory.
    It ignores files starting with a double underscore __.

    Parameters:

      sDirectoryName (string)

    Modifies:

      lModules (string list)
    '''
    try:
        lDirectoryContents = os.listdir(sDirectoryName)
        for sFileName in lDirectoryContents:
            if sFileName.endswith('.py') and not sFileName.startswith('__'):
                lModules.append(sFileName.replace('.py', ''))
    except OSError:
        print('ERROR: specified local rules directory ' + sDirectoryName + ' could not be found.')
        exit()


def get_rules_from_module(lModules, lRules):
    '''
    Returns a list of files that start with "rule_".

    Parameters:

      lModules (list)

    Modifies:

      lRules (object list)
    '''
    for sModuleName in lModules:
        for name, obj in inspect.getmembers(importlib.import_module(sModuleName)):
            if name.startswith('rule_'):
                lRules.append(obj())


def load_local_rules(sDirectoryName):
    '''
    Loads rules from the directory passed to this routine.

    Parameters:

      sDirectoryName (string)

    Returns: (string list)
    '''
    lLocalModules = []
    get_python_modules_from_directory(sDirectoryName, lLocalModules)

    lRules = []
    get_rules_from_module(lLocalModules, lRules)
    return lRules


def load_rules():
    '''
    Loads rules from the vsg/rules directory.

    Parameters:  None

    Returns:  (rule object list)
    '''
    lRules = []
    for name, oPackage in inspect.getmembers(importlib.import_module('vsg.rules')):
        if inspect.ismodule(oPackage):
            for name, oRule in inspect.getmembers(oPackage):
                if inspect.isclass(oRule) and name.startswith('rule_'):
                    lRules.append(oRule())

    return lRules


def maximum_phase(lRules):
    '''
    Determines the maximum phase number from all the rules.

    Parameters:
      lRules (rule object list)

    Returns: (integer)
    '''
    maximumPhaseNumber = 0
    for oRule in lRules:
        if oRule.phase > maximumPhaseNumber:
            maximumPhaseNumber = oRule.phase
    return maximumPhaseNumber


class rule_list():
    '''
    Contains a list of all rules to be checked.
    It loads all base rules.
    Localized rules are loaded if specified.

    Parameters:

      oVhdlFile: (vhdlFile object)

      sLocalRulesDirectory: (string) (optional)
    '''
    def __init__(self, oVhdlFile, sLocalRulesDirectory=None):
        self.rules = (load_rules())
        if sLocalRulesDirectory:
            self.rules.extend(load_local_rules(sLocalRulesDirectory))
        self.iNumberRulesRan = 0
        self.lastPhaseRan = 0
        self.oVhdlFile = oVhdlFile
        self.maximumPhase = maximum_phase(self.rules)
        self.violations = False

    def fix(self, iFixPhase=7, lSkipPhase=[]):
        '''
        Applies fixes to all violations found.

        Parameters:

          iFixPhase : (integer)

          lSkipPhases : (list of integers)
        '''
        for phase in range(1, int(iFixPhase) + 1):
            if phase in lSkipPhase:
                continue
            
            for subphase in range(1, 3):
                for oRule in self.rules:
                    if oRule.phase == phase and oRule.subphase == subphase and not oRule.disable:
                        oRule.fix(self.oVhdlFile)

    def check_rules(self, lSkipPhase=[]):
        '''
        Analyzes all rules in increasing phase order.
        If there is a violation in a phase, analysis is halted.

        Parameters:

          lSkipPhase : (list of integers)
        '''
        self.iNumberRulesRan = 0
        iFailures = 0
        self.violations = False
        for phase in range(1, 10):
            if phase in lSkipPhase:
                continue
            for oRule in self.rules:
                if oRule.phase == phase and not oRule.disable:
                    oRule.analyze(self.oVhdlFile)
                    iFailures += len(oRule.violations)
                    self.iNumberRulesRan += 1
                    self.lastPhaseRan = phase
            if iFailures > 0:
                self.violations = True
                break

    def report_violations(self, sOutputFormat):
        '''
        Prints out violations to stdout.

        Parameters:

          sOutputFormat (string)
        '''
        dRunInfo = {}
        dRunInfo['filename'] = self.oVhdlFile.filename
        dRunInfo['stopPhase'] = 7
        dRunInfo['violations'] = []
        for phase in range(1, self.lastPhaseRan + 1):
            for iLineNumber in range(0, len(self.oVhdlFile.lines)):
                for oRule in self.rules:
                    if oRule.phase == phase and oRule.has_violations():
                        dRunInfo['stopPhase'] = phase
                        lViolations = oRule.get_violations_at_linenumber(iLineNumber)
                        dRunInfo['violations'].extend(lViolations)

        dRunInfo['num_rules_checked'] = self.iNumberRulesRan
        dRunInfo['total_violations'] = len(dRunInfo['violations'])

        if sOutputFormat == 'vsg':
            report.vsg_stdout.print_output(dRunInfo)
        else:
            report.syntastic_stdout.print_output(dRunInfo)

    def configure(self, configurationFile):
        '''
        Configures individual rules based on dictionary passed.

        Parameters:

          configurationFile: (dictionary)
        '''
        if configurationFile and 'rule' in configurationFile:
            self._validate_configuration_rule_exists(configurationFile)
            for oRule in self.rules:
                oRule.configure(configurationFile)
        if configurationFile['debug']:
            for oRule in self.rules:
                oRule.set_debug()

    def _validate_configuration_rule_exists(self, configurationFile):
        '''
        Validates rules called out in the configuration files exist in the rule set.

        If a rule does not exist then:

          1) an error message will be printed
          2) tool will exit with a status of 1

        Parameters:

          configurationFile: (dictionary)

        Returns:  nothing
        '''
        lRuleNames = []
        for oRule in self.rules:
            lRuleNames.append(oRule.name + '_' + oRule.identifier)
        for sRule in configurationFile['rule']:
            if not sRule == 'global' and sRule not in lRuleNames:
                print('ERROR: Rule ' + sRule + ' referenced in configuration could not be found')
                exit(1)

    def extract_junit_testcase(self, sVhdlFileName):
        '''
        Creates JUnit XML file listing all violations found.

        Parameters:

          sVhdlFileName (string)

        Returns: (junit testcase object)
        '''
        oTestcase = junit.testcase(sVhdlFileName, str(0), 'failure')
        oFailure = junit.failure('Failure')
        for oRule in self.rules:
            if len(oRule.violations) > 0:
                for dViolation in oRule.violations:
                    sLine = oRule.name + '_' + oRule.identifier + ': '
                    sLine += str(utils.get_violation_line_number(dViolation)) + ' : '
                    sLine += oRule._get_solution(dViolation)
                    oFailure.add_text(sLine)
                oTestcase.add_failure(oFailure)

        return oTestcase

    def get_configuration(self):
        '''
        Returns a dictionary with every rule and how it is configured.

        Parameters:

          None

        Returns: (dictionary)
        '''
        dConfiguration = {}
        for oRule in self.rules:
            sId = oRule.name + '_' + oRule.identifier
            dConfiguration[sId] = oRule.get_configuration()
        return dConfiguration
