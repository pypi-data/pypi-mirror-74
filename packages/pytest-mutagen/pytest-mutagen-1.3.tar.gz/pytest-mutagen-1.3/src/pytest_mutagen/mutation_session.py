import sys
from os import path

import pytest
from _pytest.runner import runtestprotocol
from _pytest.python import Class, Instance, Module, Package

import pytest_mutagen.mutagen as mg
from pytest_mutagen import plugin as pl

class MutationSession:
    '''
    The whole mutation session, its role is to create all MutateModule objects with the right name,
    functions and mutants. All of this is stored in self.collected, its format is described in
    get_stacked_collection.
    '''
    def __init__(self, session):
        ''' Initialize all attributes and handle the --select option '''

        self.session = session
        self.reporter = session.config.pluginmanager.get_plugin("terminalreporter")
        self.collected = []

        if len(self.reporter.getreports("error")) > 0 or len(self.reporter.getreports("failed")) > 0:
            return

        if session.config.getoption(pl.SELECT_MUTANTS):
            for module, mutants in mg.g_mutant_registry.items():
                for name in list(mutants.keys()):
                    if not name in session.config.getoption(pl.SELECT_MUTANTS).split(","):
                        del mg.g_mutant_registry[module][name]

        self.reporter._tw.line()
        self.reporter.write_sep("=", "mutation session starts", bold=True)
        self.reporter.showfspath = False

        self.get_stacked_collection()

    def run_session(self):
        ''' Run all collected modules '''

        for suite in self.collected:
            for item in suite[:-2]:
                display_item(self.reporter, item)
            suite[-1].run_mutations()

        if len(self.collected) > 0:
            self.reporter.stats["error"] = []
            self.reporter.stats["failed"] = []

    def get_stacked_collection(self):
        '''
        Parse session.items, create all MutateModule objects and fill self.collected

        Format of self.collected:
        List of lists (one list per MutateModule object) where each list contains the stacked headers
        to display before each MutateModule. Example:

        [[<Package>, <Module>, <MutateModule>], [<Module>, <MutateModule>],
            [<Module>, <MutateModule>], [<Module>, <MutateModule>],
            [<Package>, <Module>, <MutateModule>]]

        The MutateModule object is the last item of each sublist, and each Package and Module appear
        in one unique sublist.
        '''
        items = self.session.items

        # Syntax from by _pytest.terminal.TerminalReporter._printcollecteditems
        stack = []
        for item in items:
            needed_collectors = item.listchain()[1:]  # strip root node
            self._remove_classes(needed_collectors)
            while stack:
                if stack == needed_collectors[: len(stack)]:
                    break
                stack.pop()
            if len(stack) == len(needed_collectors) - 1:
                self.collected[-1][-1].collection.append(needed_collectors[-1])
            else:
                mutate_module = MutateModule(self.session, needed_collectors)
                specified_in_args = mutate_module.basename in [path.basename(a) for a in self.session.config.args]

                if len(mutate_module.mutants) > 0 or specified_in_args:
                    pl.mutants_passed_all_tests[mutate_module.basename] = []
                    self.collected.append(needed_collectors[len(stack):-1] + [mutate_module])
                    for col in needed_collectors[len(stack) :]:
                        stack.append(col)

    @staticmethod
    def _remove_classes(l):
        ''' Delete all instances of Class or Instance from the list l '''

        i = 0
        while i < len(l):
            if isinstance(l[i], Class) or isinstance(l[i], Instance):
                del l[i]
            else:
                i += 1


class MutateModule:
    ''' Store the mutants and the functions of a test module (~test file) and run them '''

    def __init__(self, session, needed_collectors):
        '''
        Initialize every attribute

        Inputs:
            * session [pytest session]
            * needed_collector [list]
        '''
        self.basename = path.basename(needed_collectors[-2].name)
        self.mutants = self.get_mutants_per_module(self.basename)
        self.collection = [needed_collectors[-1]]
        self.session = session
        self.reporter = session.config.pluginmanager.get_plugin("terminalreporter")

    @staticmethod
    def get_mutants_per_module(module_name):
        ''' Return all mutants to be applied to a particular module '''

        muts = list(mg.g_mutant_registry[mg.APPLY_TO_ALL].values())
        if module_name in mg.g_mutant_registry:
            muts += list(mg.g_mutant_registry[module_name].values())
        return muts

    def run_mutations(self):
        '''
        Run the test module once for each mutant.
        Handle the --quick-mut option and the cache
        '''
        if self.session.config.getoption(pl.QUICK_MUTATIONS):
            self.mutants = [x for x in self.mutants if x.nb_catches == 0]
            if len(self.mutants) == 0:
                return

        self.reporter._tw.line()
        self.reporter.write_line("Module " + self.basename + ":")

        if len(self.mutants) == 0:
            self.reporter.write_line("No mutant registered", **{"purple": True})

        for mutant in self.mutants:
            self.check_cache_and_rearrange(mutant.name)

            mg.g_current_mutant = mutant
            all_test_passed = True
            skip = False
            for item in self.collection:
                if not skip:
                    saved_globals = self.modify_environment(item, mutant)
                    reports = runtestprotocol(item)
                    if any(("failed" in report.outcome) for report in reports):
                        self.write_in_cache(item, mutant.name)
                        mutant.nb_catches += 1
                        all_test_passed = False
                        if self.session.config.getoption(pl.QUICK_MUTATIONS):
                            skip = True
                    self.restore_environment(item, mutant, saved_globals)
                else:
                    self.reporter.write(" ")

            mg.g_current_mutant = None

            if all_test_passed:
                self.reporter.write_line("\t" + mutant.name + "\t/!\ ALL TESTS PASSED")
                pl.mutants_passed_all_tests[self.basename].append(mutant.name)
            else:
                self.reporter.write_line("\t" + mutant.name)

    def check_cache_and_rearrange(self, mutant_name):
        ''' For a given mutant, rearrange self.collection to put the failures in first position '''

        cached_failures = self.session.config.cache.get("mutagen/" + self.basename + "/" + mutant_name, None)
        expected_failures = []
        expected_successes = []
        if not cached_failures is None:
            for item in self.collection:
                if self.get_func_from_item(item).__qualname__ in cached_failures:
                    expected_failures.append(item)
                else:
                    expected_successes.append(item)
            self.session.config.cache.set("mutagen/" + self.basename + "/" + mutant_name, [])
            self.collection = expected_failures + expected_successes

    def write_in_cache(self, item, mutant_name):
        '''
        Write the item that caught a mutant in the cache

        Inputs:
            * item [pytest item]
            * mutant_name [string] is the caught mutant
        '''
        l = self.session.config.cache.get("mutagen/" + self.basename + "/" + mutant_name, None)
        new_val = self.get_func_from_item(item).__qualname__
        self.session.config.cache.set("mutagen/" + self.basename + "/" + mutant_name, ([] if l is None else l) + [new_val])

    @staticmethod
    def get_func_from_item(item):
        ''' Return the function linked to a pytest_item '''

        if not hasattr(item, "function"):
            return None
        if hasattr(item.function, "is_hypothesis_test") and getattr(item.function, "is_hypothesis_test"):
            return getattr(item.function, "hypothesis").inner_test
        return item.function

    @staticmethod
    def get_object_to_modify(obj_name, f, repl):
        '''
        Return the function or class that will be mutated in modify_environment

        Inputs:
            * obj_name [string] is the name of the object
            * f [function] is the test function, that sometimes contains the object in its globals
            * repl [function] is the replacement function, that should contain the object in its
                globals
        '''
        obj_to_modify = None
        if hasattr(repl, "__globals__") and obj_name in repl.__globals__:
            obj_to_modify = repl.__globals__[obj_name]
        elif isinstance(repl, property) and obj_name in repl.fget.__globals__:
            obj_to_modify = repl.fget.__globals__[obj_name]

        if obj_to_modify is None:
            raise NameError("Could not find " + obj_name + ", make sure that it's imported in the file containing mutations")
        return obj_to_modify

    @staticmethod
    def modify_environment(item, mutant):
        '''
        The important function, that applies a mutant.
        For top-level function the __code__ attribute is switched and for class methods the whole
        function is replaced in the __dict__ of the class

        Inputs:
            * item [pytest item] is the current item (test function)
            * mutant [Mutant] is the mutant that will be applied
        '''
        saved = {}
        f = MutateModule.get_func_from_item(item)

        if f is None:
            return []

        for func_name, repl in mutant.function_mappings.items():
            if not "." in func_name:
                func_to_modify = MutateModule.get_object_to_modify(func_name, f, repl)

                saved[func_name] = func_to_modify.__code__
                func_to_modify.__code__ = repl.__code__
            else:
                l = func_name.split(".", 1)
                class_to_modify = MutateModule.get_object_to_modify(l[0], f, repl)
                saved[func_name] = class_to_modify.__dict__[l[1]]

                if isinstance(saved[func_name], staticmethod):
                    setattr(class_to_modify, l[1], staticmethod(repl))
                elif isinstance(saved[func_name], property):
                    if isinstance(repl, property):
                        new_prop = repl
                    else:
                        new_prop = property(fget=repl, fset=saved[func_name].fset, fdel=saved[func_name].fdel)
                    setattr(class_to_modify, l[1], new_prop)
                else:
                    setattr(class_to_modify, l[1], repl)

        return saved

    @staticmethod
    def restore_environment(item, mutant, saved):
        '''
        Restore the environment by performing the reverse actions of modify_environment

        Inputs:
            * item [pytest item] is the current item (test function)
            * mutant [Mutant] is the mutant that will be applied
            * saved [dict] stores the original versions of the functions
        '''
        f = MutateModule.get_func_from_item(item)

        for func_name in saved:
            if not "." in func_name:
                func_to_modify = MutateModule.get_object_to_modify(func_name, f, mutant.function_mappings[func_name])
                func_to_modify.__code__ = saved[func_name]
            else:
                l = func_name.split(".", 1)
                class_to_modify = MutateModule.get_object_to_modify(l[0], f, mutant.function_mappings[func_name])
                setattr(class_to_modify, l[1], saved[func_name])


def display_item(reporter, item):
    ''' Print an item in the given reporter '''

    reporter._tw.line()
    if isinstance(item, Package):
        reporter.write_sep("-", "Package " + path.basename(item.name), bold=False)
    elif isinstance(item, Module):
        reporter.write_line("Module " + path.basename(item.name) + ":")
    else:
        reporter.write_line("Not recognized " + ":")