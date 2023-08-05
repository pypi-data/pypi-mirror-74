from rhme.hme_parser.grammar import yacc as yacc
from rhme.hme_parser.grammar import lex as lex
from rhme.hme_parser import correct_grammar as correct_grammar
from rhme.hme_parser import check_grammar_lex as check_grammar_lex
from rhme.helpers.exceptions import GrammarError, LexicalError, SintaticError
from rhme import helpers
import numpy as np

class CheckSintax():
    def __init__(self):
        self.__first_error = True
        self.latex_string=""
        self.latex=""
        self.latex_list=""
        self.attempts=0
        self.index=0

        self.lex_errors_history=[]
        self.yacc_errors_history=[]

        self.yacc_error_list=None
        self.lex_error_list=None

        self.pure_yacc_errors=[]
        self.pure_lex_errors=[]

    def set_lex_data(self, check_lex_data): 
        self.latex = check_lex_data['latex']
        self.latex_list = check_lex_data['latex_list']
        self.latex_string = check_lex_data['latex_string']
        self.lex_errors_history = check_lex_data['errors_history']
        self.pure_lex_errors = check_lex_data['pure_errors']

    def __locate_grammar_error(self, yacc_error_list):
        helpers.debug("\n[check_grammar_sintax.py] __locate_grammar_error() | Locating all errors and creating a data structure.")

        yacc_error_list = yacc_error_list.copy()
        latex = self.latex.copy()

        yacc_errors = []
        yacc_errors_history = self.yacc_errors_history.copy()

        helpers.debug("[check_grammar_sintax.py] __locate_grammar_error() | Errors: {0}".format(yacc_error_list))

        for error in yacc_error_list:

            if error['value'] != None:

                helpers.debug("[check_grammar_sintax.py] __locate_grammar_error() | ...for() value not none")

                count = 0
                count_list = 0

                latex_error_pos = error['lexpos']
                latex_error_token = error['value']

                for symbol in latex:

                    if symbol['label'] == latex_error_token and count == latex_error_pos:

                        yacc_errors.append({
                            'pos': latex_error_pos,
                            'pos_list': count_list,
                            'label': symbol['label'],
                            'prediction': symbol['prediction'],
                            'attempts': [symbol['label']] # Adiciona a si mesmo como tentativa de solução
                        })

                        yacc_errors_history.extend(yacc_errors)

                        break

                    count += len(symbol['label'])
                    count_list += 1

            else:
                helpers.debug("Use automata to fix")
                continue

        return yacc_errors, yacc_errors_history

    def check_correct_grammar(self):
        """Check and correct lex errors

        Args:
            latex_string (str): Latex string.
            latex (list): First latex structure.
            latex_list (list): [description]

        Returns:
            {
                'latex': self.latex,
                'latex_list': self.latex_list,
                'latex_string': self.latex_string, 
                'yacc_errors_history': self.yacc_errors_history,
                'lex_errors_history': self.lex_errors_history,
                'yacc_pure_errors': self.pure_yacc_errors,
                'lex_pure_errors': self.pure_lex_errors # Não está sendo adicionado aqui
            }
        """

        helpers.debug("\n---------------------------------------------------------------------------------")
        helpers.debug("[check_grammar_sintax.py] check_correct_grammar() | attempts: %s" % self.attempts)

        second_yacc_error_list = None
        yacc_errors = []

        if not self.yacc_error_list and self.__first_error and self.attempts < 3:

            helpers.debug("[check_grammar_sintax.py] check_correct_grammar() | There's no previous errors")

            yacc_error_list = yacc.LatexParse(self.latex_string)

            if yacc_error_list:

                self.pure_yacc_errors.extend(yacc_error_list)
                helpers.debug("[check_grammar_sintax.py] check_correct_grammar() | pure_yacc_errors: {0}".format(self.pure_yacc_errors))

                # Trata erro EOF
                if yacc_error_list[0]['lexpos'] == None:
                    yacc_error_list[0].update({'lexpos': len(self.latex_string) -1})
                    yacc_error_list[0].update({'value': self.latex_string[-1]})

                yacc_errors, yacc_errors_history = self.__locate_grammar_error(yacc_error_list)

                self.yacc_error_list = yacc_errors
                self.yacc_errors_history = yacc_errors_history
                helpers.debug("[check_grammar_yacc.py] check_correct_yacc() | yacc_error_list: {0}".format(self.yacc_error_list))
                helpers.debug("[check_grammar_yacc.py] check_correct_yacc() | yacc_errors_history: {0}".format(self.yacc_errors_history))

                self.__first_error = False

                self.__attempt_to_fix_error(yacc_errors)

        elif self.yacc_error_list and not self.__first_error and self.attempts < 3:
            # Após a correção do primeiro erro gramatical é necessário verificar se a correção não gerou erros léxicos.

            helpers.debug("\n[check_grammar_sintax.py] check_correct_grammar() | There were errors before")

            self.__find_lexical_errors()
            # Se chegou aqui é porque não há mais erros léxicos

            second_yacc_error_list = yacc.LatexParse(self.latex_string)


            if second_yacc_error_list:
                helpers.debug("\n[check_grammar_sintax.py] check_correct_grammar() | New errors found")

                self.pure_yacc_errors.extend(second_yacc_error_list)
                helpers.debug("\n[check_grammar_sintax.py] check_correct_grammar() | pure_yacc_errors: {0}".format(self.pure_yacc_errors))

                # Trata erro de EOF
                if second_yacc_error_list[0]['lexpos'] == None:
                    second_yacc_error_list[0].update({'lexpos': len(self.latex_string) -1})
                    second_yacc_error_list[0].update({'value': self.latex_string[-1]})

                yacc_errors, yacc_errors_history = self.__locate_grammar_error(second_yacc_error_list)

                self.yacc_error_list = yacc_errors
                self.yacc_errors_history = yacc_errors_history
                helpers.debug("[check_grammar_yacc.py] check_correct_yacc() | yacc_error_list: {0}".format(self.yacc_error_list))
                helpers.debug("[check_grammar_yacc.py] check_correct_yacc() | yacc_errors_history: {0}".format(self.yacc_errors_history))

                self.__attempt_to_fix_error(yacc_errors)

        elif self.yacc_error_list and self.attempts >= 3:
            helpers.debug("\n[check_grammar_sintax.py] check_correct_grammar() | GrammarError")

            raise GrammarError({
                'latex': self.latex,
                'latex_list': self.latex_list,
                'latex_string': self.latex_string,
                'error': self.yacc_error_list, # Current error
                'errors_history': self.yacc_errors_history,
                'pure_errors': self.pure_yacc_errors
            })

        # Retorna quando conseguir resolver a gramática
        return {
            'latex': self.latex,
            'latex_list': self.latex_list,
            'latex_string': self.latex_string, 
            'yacc_errors_history': self.yacc_errors_history,
            'lex_errors_history': self.lex_errors_history,
            'yacc_pure_errors': self.pure_yacc_errors,
            'lex_pure_errors': self.pure_lex_errors
        }

    def __find_lexical_errors(self):
        helpers.debug("\n................FIND LEXICAL ERRORS................")

        cgl = check_grammar_lex.CheckLex()

        cgl.latex_string = self.latex_string
        cgl.latex = self.latex
        cgl.latex_list = self.latex_list
        cgl.attempts = 0

        check_lex_data = cgl.check_correct_lex()

        # Se chegou aqui é porque conseguiu solucionar

        self.latex = check_lex_data['latex']
        self.latex_list = check_lex_data['latex_list']
        self.latex_string = check_lex_data['latex_string']
        self.pure_lex_errors = check_lex_data['pure_errors']
        lex_errors_history = check_lex_data['errors_history']
        self.lex_errors_history.extend(lex_errors_history)

        helpers.debug("...................................................")

    def __attempt_to_fix_error(self, yacc_errors):
        helpers.debug('[check_grammar_sintax.py] __attempt_to_fix_error()')

        # Tenta resolver o PRIMEIRO erro e retorna a lista de erros atualizada
        bg = correct_grammar.CorrectGrammar()

        # Une as tentativas de soluções do Lex e do Yaxx
        fix_attempts = self.lex_errors_history.copy() 
        fix_attempts.extend(self.yacc_errors_history)

        corrected_data = bg.correct_grammar_lex(yacc_errors, self.latex, self.latex_list, 0, fix_attempts)

        updated_latex_string = corrected_data['latex_string']
        self.yacc_error_list = corrected_data['errors'] # Updated error with attempt
        self.index = corrected_data['index']

        # Se ainda houver erros
        if self.yacc_error_list:
            self.yacc_errors_history = self.yacc_error_list.copy()


        helpers.debug("[check_grammar_yacc.py] self.__attempt_to_fix_error() | Updated yacc error: {0}".format(self.yacc_error_list))
        helpers.debug("[check_grammar_yacc.py] self.__attempt_to_fix_error() | Updated yacc error history: {0}".format(self.yacc_errors_history))

        # Se ...
        if updated_latex_string:
            self.latex_string = updated_latex_string
            self.attempts += 1
            return self.check_correct_grammar()
