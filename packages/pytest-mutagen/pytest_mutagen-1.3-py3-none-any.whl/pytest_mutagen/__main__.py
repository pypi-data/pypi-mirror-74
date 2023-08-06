import sys
import os
import parso
import argparse
import hashlib
from os import path
from py.io import TerminalWriter

RED   = "\033[1;37;41m"
CYAN  = "\033[1;36m"
GREEN = "\033[0;32m"
RESET = "\033[0;0m"

# Maps function names to the list of their mutants
all_mutants = {}

# For the "finding mutants" phase, keeps track of current function/class during the recursion
current_func = None
current_class = None

# Enumerate the mutants inside a function to give them a unique name
mutant_count = 0

hash_list = []

class StrMutant:
    '''
    Each mutant is represented by its name (mutagen style), the function where it's applied,
    the start and end positions of the part to replace (tuples of relative positions to the beginning
    of the function) and the string to insert at this location.
    '''
    def __init__(self, name, func_name, start_pos, end_pos, new_str):
        self.name = name
        self.func_name = func_name
        self.start_pos = start_pos
        self.end_pos = end_pos
        self.new_str = new_str
    def __str__(self):
        return "[" + self.func_name + " | " + str(self.start_pos) + " --> " + str(self.end_pos) + \
            ": " + self.new_str + "]"
    @property
    def hash(self):
        '''
        Hash value to uniquely identify each mutant in a file and recognize the one that we've already
        treated
        '''
        s = ":".join((self.name, self.func_name, str(self.start_pos), str(self.end_pos), self.new_str))
        return hashlib.shake_128(str.encode(s)).hexdigest(8)

def get_func_name(function_node):
    ''' Return the qualified name of a "funcdef" node '''
    prefix = "" if current_class is None else current_class.name.value + "."
    return prefix + function_node.name.value

def find_mutants(node):
    '''
    Finds all class/functions of the file, sets the global variables and calls the
    recursive search
    '''
    global current_func
    global current_class
    global mutant_count

    for child in node.children:
        if child.type == "funcdef":
            current_func = child
            mutant_count = 0
            find_mutants_rec(child.get_suite())
            current_func = None
        elif child.type == "classdef":
            current_class = child
            find_mutants(child.get_suite())
            current_class = None
            continue

def relative_positions(start, end, func):
    '''Return the start and end positions relatively to the function '''
    start_pos = (start[0] - func.start_pos[0], start[1] - func.start_pos[1])
    end_pos = (end[0] - func.start_pos[0], end[1] - func.start_pos[1])
    return (start_pos, end_pos)


def find_mutants_rec(node):
    ''' Recursively search for mutants in a function '''
    global all_mutants
    global current_func
    global mutant_count
    global hash_list

    current_func_name = get_func_name(current_func)
    for child in node.children:
        start_pos, end_pos, new_str = None, None, ""

        if child.type == "if_stmt":
            # "if not condition:" ---> "if condition:"
            if child.children[1].type == "not_test":
                keyword_not = child.children[1].children[0]

                start_pos, end_pos = relative_positions(keyword_not.start_pos, keyword_not.end_pos, current_func)
                new_str = ""
            # "if condition:" ---> "if not (condition):"
            else:
                keyword = child.children[0]
                condition = child.children[1]
                start_pos, end_pos = relative_positions(keyword.end_pos, condition.end_pos, current_func)

                condition_code = condition.get_code()
                if condition_code[0] == ' ':
                    condition_code = condition_code[1:]
                    start_pos = start_pos[0], start_pos[1] + 1
                elif condition_code[0] == '(':
                    assert condition_code[-1] == ')'
                    condition_code = condition_code[1:-1]
                    new_str = " "

                new_str += "not (" + condition_code + ")"
        # any right value ---> None
        elif child.type == "operator" and child.value == "=" and not (child.get_next_sibling().type == "keyword" and child.get_next_sibling().value == "None"):
            start_pos, end_pos = relative_positions(child.get_next_sibling().start_pos, child.parent.end_pos, current_func)
            new_str = "None"

        # operators switch
        elif child.type == "operator":
            operator_mutations = {
                    '+': '-',
                    '-': '+',
                    '*': '/',
                    '/': '*',
                    '//': '/',
                    '%': '/',
                    '<<': '>>',
                    '>>': '<<',
                    '&': '|',
                    '|': '&',
                    '^': '&',
                    '**': '*',
                    '~': '',

                    '+=': '-=',
                    '-=': '+=',
                    '*=': '/=',
                    '/=': '*=',
                    '//=': '/=',
                    '%=': '/=',
                    '<<=': '>>=',
                    '>>=': '<<=',
                    '&=': '|=',
                    '|=': '&=',
                    '^=': '&=',
                    '**=': '*=',
                    '~=': '=',

                    '<': '<=',
                    '<=': '<',
                    '>': '>=',
                    '>=': '>',
                    '==': '!=',
                    '!=': '==',
                    '<>': '==',
                }
            if child.value in operator_mutations:
                start_pos, end_pos = relative_positions(child.start_pos, child.end_pos, current_func)
                new_str = operator_mutations[child.value]
            else:
                continue
        # return ... ---> pass
        # and the content od the return can be mutated too
        elif child.type == "return_stmt":
            start_pos, end_pos = relative_positions(child.start_pos, child.end_pos, current_func)
            new_str = "pass"
        # number ---> number + 1
        elif child.type == "number":
            start_pos, end_pos = relative_positions(child.start_pos, child.end_pos, current_func)
            new_str = str(1 + eval(child.value))
        else:
            if hasattr(child, "children"):
                find_mutants_rec(child)
            continue

        str_mutant = StrMutant(current_func_name.upper()+"_"+str(mutant_count), current_func_name, start_pos, end_pos, new_str)
        mutant_count += 1
        if str_mutant.hash not in hash_list:
            if current_func_name not in all_mutants:
                all_mutants[current_func_name] = [str_mutant]
            else:
                all_mutants[current_func_name].append(str_mutant)

        if hasattr(child, "children"):
            find_mutants_rec(child)


def print_enlight(func_code, mutant, color):
    ''' Prints the function code with the mutated part highlighted in red '''
    start = mutant.start_pos
    end = mutant.end_pos

    for i, line in enumerate(func_code):
        if start[0] <= i <= end[0]:
            line_start = start[1] if i == start[0] else 0
            line_end = end[1] if i == end[0] else len(line)
            print(line[:line_start] + color + line[line_start:line_end] + RESET + line[line_end:])
        else:
            print(line)

def write_to_mutation_file(output_file, func_code, mutant):
    ''' Write a mutant to the output_file in the mutagen syntax, and the hash as commentary '''
    file = open(output_file, "a")

    file.write("#hash=" + mutant.hash + "\n")
    file.write("@mg.mutant_of(\"" + mutant.func_name + "\", \"" + mutant.name + "\")\n")
    start = mutant.start_pos
    end = mutant.end_pos

    file.write("def" + func_code[0][3:].replace(mutant.func_name, mutant.name.lower(), 1) + "\n")
    for i, line in list(enumerate(func_code))[1:]:
        if i == start[0]:
            file.write(line[:start[1]] + mutant.new_str)
        if i == end[0]:
            file.write(line[end[1]:] + "\n")

        if not (start[0] <= i <= end[0]):
            file.write(line + "\n")

    file.close()

def make_valid_import(file, module):
    ''' Return the pythonic syntax to import file from module '''
    assert file[-3:] == ".py"

    return path.join(path.basename(path.normpath(module)), path.relpath(file, start=module)).replace("/", ".")[:-3]

def check_already_written(filename):
    ''' Retrieve all hashes from a file, corresponding to the already written mutants '''
    global all_mutants
    global hash_list

    hash_list = []
    with open(filename, "r") as file:
        lines = file.read().split("\n")
        for l in lines:
            if l.startswith("#hash="):
                hash_list.append(l[6:])

def main():
    global all_mutants

    parser = argparse.ArgumentParser(description="Suggest mutants to the user that can keep them or delete them.\n\
                                        The kept mutants are written to a file and ready to use with pytest-mutagen")
    parser.add_argument('input_path',
                        help='path to the file or directory to mutate')
    parser.add_argument('-o', '--output-path', default=".",
                        help='path to the file or directory where the mutants should be written')
    parser.add_argument('-m', '--module-path', default=None,
                        help='path to the module directory (location of __init__.py) for import purposes')
    parser.add_argument('-r', '--reset', action="store_true",
                        help='ignore existing files and reset them')
    args = parser.parse_args()
    input_file_path = args.input_path
    output_path = args.output_path

    if path.isdir(input_file_path):
        for root, dirs, files in os.walk(input_file_path, topdown=True):
            for filename in files:
                if filename.endswith('.py'):
                    module_path = args.module_path if args.module_path else input_file_path
                    mutate_file(os.path.join(root, filename), \
                        path.join(output_path, "mutations_" + filename) if path.isdir(output_path) else "mutations_" + filename,\
                        module_path, args.reset)
    else:
        module_path = args.module_path if args.module_path else path.dirname(input_file_path)
        mutate_file(input_file_path, path.join(output_path,\
            "mutations_"+path.basename(input_file_path)) if path.isdir(output_path) else output_path,\
                module_path, args.reset)

def get_imports():
    ''' Return the names of classes and top-level functions to import '''
    global all_mutants
    imports = []

    for func in all_mutants.keys():
        if '.' in func:
            l = func.split('.')
            if l[0] not in imports:
                imports.append(l[0])
        else:
            imports.append(func)

    return imports


def mutate_file(input_file_path, output_file_name, module_path, reset):
    '''
    Find the mutants in the input file and write the ones chosen by the user to the output file
    '''
    global all_mutants

    input_file = open(input_file_path, "r")
    content = input_file.read()
    input_file.close()

    TerminalWriter().sep("=", path.basename(input_file_path))

    write_imports = True
    if path.isfile(output_file_name) and not reset:
        write_imports = False
        print(CYAN + "The file", output_file_name, "already exists.")
        print("\t(r) reset")
        print("\t(c) continue where it stopped")
        print("\t(a) abort" + RESET)
        answer = input()
        while answer not in ["r", "a", "c"]:
            answer = input("Invalid choice, try again: ")

        if answer == "r":   # reset
            write_imports = True
        elif answer == "a": # abort
            return
        elif answer == "c": # continue
            check_already_written(output_file_name)

    all_mutants = {}
    tree = parso.parse(content)
    find_mutants(tree)
    if len(all_mutants) == 0:
        return

    if write_imports:
        output_file = open(output_file_name, "w")
        output_file.write("import pytest_mutagen as mg\n")
        output_file.write("import " + path.basename(path.normpath(module_path)) + "\n")
        output_file.write("from " + make_valid_import(input_file.name, module_path) + " import ")
        output_file.write(", ".join(get_imports()))
        output_file.write("\n\n")
        output_file.write("mg.link_to_file(mg.APPLY_TO_ALL)\n\n")
        output_file.close()

    for child in tree.children:
        if child.type == "funcdef":
            mutate_function(child, output_file_name)
        elif child.type == "classdef":
            mutate_class(child, output_file_name)

    print("Mutants written to", output_file_name)
    all_mutants = {}

def mutate_class(child, output_file_name):
    ''' Set current_class and call mutate_function for all methods of the class '''
    global current_class
    global all_mutants

    if not any(func_name.startswith(child.name.value) for func_name in all_mutants.keys()):
        return

    TerminalWriter().sep(".", child.name.value)

    current_class = child
    for c in child.get_suite().children:
        if c.type == "funcdef":
            mutate_function(c, output_file_name)
    current_class = None

    TerminalWriter().sep(".")

def remove_unnecessary_spaces(func_code, offset):
    '''
    Remove the first empty lines of a func_code object and the offset
    in the case of class methods
    '''
    empty_lines = 0
    for line in func_code:
        if line == "":
            empty_lines += 1
        else:
            break
    func_code = func_code[empty_lines:]

    return [line[offset:] for line in func_code]


def mutate_function(child, output_file_name):
    ''' Propose a mutant to the user and write it to the output file if it is accepted '''
    global all_mutants

    func_code = child.get_code().split("\n")
    func_name = get_func_name(child)

    func_code = remove_unnecessary_spaces(func_code, child.start_pos[1])

    for i, mutant in enumerate(all_mutants.get(func_name, [])):
        title = "# Function " + func_name + " #"

        print()
        print("#"*len(title))
        print(title)
        print("#"*len(title))
        print("\nMutant:", GREEN + mutant.new_str + RESET)
        print()

        print_enlight(func_code, mutant, RED)
        print(CYAN + "\tKeep? (n to delete)" + RESET, end="\t")
        answer = input()

        if answer == "n":
            del mutant
        else:
            write_to_mutation_file(output_file_name, func_code, mutant)

if __name__=="__main__":
    main()