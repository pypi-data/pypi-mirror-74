"""Main module of this project."""

from .database import DATABASE_42
from .expr_utils import expr_eval, judge_equivalent
from .exceptions import (UnmatchedNumberError, WrongAnswerError,
                         UnsupportedSyntaxError, RepeatedAnswerError,
                         GameStatusError, ProblemError)
import random
import ast


class GameApp(object):
    """
    The main game.

    Available methods (+ means playing, - means not playing):
    __init__(): initialization. (Entry point)
    is_playing(): show the status of current game. (+-)
    generate_problem(): generate a problem from database or on custom. (-)
    get_current_problem(): print current problem. (+)
    get_current_solved(): print current solutions. (+)
    get_current_solution_number(): print current solution number. (+)
    get_total_solution_number(): print total solution number. (+)
    start(): start the game. (-)
    stop(): stop the game. (+)
    solve(): put forward a solution. (+)
    """

    def __init__(self):
        """Start the game session, serving as an initialization."""
        self.__valid = []  # this list stores readable answers
        self.__formula = []  # this list stores converted formulas
        self.__playing = False  # this stores playing status

    def __status_check(self, required_status=True):
        """A status checker."""
        if required_status != self.is_playing():
            raise GameStatusError(required_status)

    def is_playing(self) -> bool:
        """Incicate the game is started or not."""
        return self.__playing

    def __generate_problem_from_database(self, **kwargs):
        """Generate a problem from database."""
        minimum_solutions = kwargs[
            'minimum_solutions'] if 'minimum_solutions' in kwargs else 3
        maximum_solutions = kwargs[
            'maximum_solutions'] if 'maximum_solutions' in kwargs else 100
        problem_list = [
            k for k in DATABASE_42.keys()
            if minimum_solutions <= DATABASE_42[k] <= maximum_solutions
        ]
        return random.choice(problem_list)

    def __generate_problem_by_user(self, **kwargs):
        """Generate a problem by user."""
        try:
            problem = tuple(sorted(list(kwargs['problem'])))
        except Exception:
            raise ProblemError('问题无法被解析')
        if problem not in DATABASE_42:
            raise ProblemError('输入的问题无解')
        return problem

    def generate_problem(self, method, **kwargs) -> tuple:
        """Generate a random problem from the database."""
        self.__status_check(required_status=False)
        if method == 'database':
            self.__problem = self.__generate_problem_from_database(**kwargs)
        elif method == 'custom':
            self.__problem = self.__generate_problem_by_user(**kwargs)
        else:
            raise ProblemError('生成题目的方法错误')

    def get_current_problem(self) -> str:
        """Get current problem. Effective when playing."""
        self.__status_check(required_status=True)
        message = '本次42点的题目为: %d %d %d %d %d' % (
            self.__problem[0], self.__problem[1], self.__problem[2],
            self.__problem[3], self.__problem[4])
        return message

    def get_current_solved(self) -> str:
        """Get current valid solutions. Effective when playing."""
        self.__status_check(required_status=True)
        line = []
        if len(self.__valid) > 0:
            line.append('有效求解:')
            total = 1
            for valid_expr in self.__valid:
                line.append('[%d] %s' % (total, valid_expr))
                total += 1
        else:
            line.append('当前暂无有效求解')
        message = ''
        for each_line in line:
            message = message + each_line + '\n'
        return message.strip()

    def get_current_solution_number(self) -> int:
        """Get the number of current solutions. Effective when playing."""
        self.__status_check(required_status=True)
        return len(self.__valid)

    def get_total_solution_number(self) -> int:
        """Get the number of total solutions. Effective when playing."""
        self.__status_check(required_status=True)
        return DATABASE_42[self.__problem]

    def __validate(self, math_expr: str) -> str:
        """Validate distinguishing expressions. Private method."""
        for ind in range(0, len(self.__formula)):
            curr_expr = self.__formula[ind]
            if judge_equivalent(self.__problem, math_expr, curr_expr):
                raise RepeatedAnswerError(self.__valid[ind])

    def solve(self, math_expr: str) -> str:
        """Put forward a solution."""
        self.__status_check(required_status=True)
        math_expr = math_expr.replace(' ', '').replace('（',
                                                       '(').replace('）', ')')

        if len(math_expr) >= 30:
            raise UnsupportedSyntaxError('待识别的公式过长')

        try:
            expr_ast = ast.parse(math_expr, mode='eval').body
        except Exception:
            raise UnsupportedSyntaxError('公式无法被解析')

        math_expr_value, simplified_expr, user_input_numbers = expr_eval(
            expr_ast, '', [])

        if math_expr_value != 42:
            raise WrongAnswerError(math_expr_value)

        if tuple(sorted(user_input_numbers)) != self.__problem:
            raise UnmatchedNumberError(user_input_numbers)

        self.__validate(simplified_expr)
        self.__formula.append(simplified_expr)
        self.__valid.append(math_expr)

    def start(self) -> str:
        """Start the game. Effective when not playing."""
        self.__status_check(required_status=False)
        self.__valid = []
        self.__formula = []
        self.__playing = True

    def stop(self) -> str:
        """Stop the game. Effective when playing."""
        self.__status_check(required_status=True)
        self.__playing = False
