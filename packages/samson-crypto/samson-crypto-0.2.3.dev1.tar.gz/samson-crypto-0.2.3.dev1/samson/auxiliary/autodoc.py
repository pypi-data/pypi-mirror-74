from samson.auxiliary.console_colors import ConsoleColors, PREFIX, SUFFIX

def color_format(color: ConsoleColors, text: str):
    from samson.utilities.runtime import RUNTIME
    if RUNTIME.use_color:
        formatted = f"{PREFIX}{color.value}m{text}{SUFFIX}"
    else:
        formatted = text

    return formatted

def type_format(cls):
    return color_format(ConsoleColors.GREEN, cls)


class DocParameter(object):
    def __init__(self, name: str, cls: type, desc: str):
        self.name = name
        self.cls = cls
        self.desc = desc


class ClassTuple(object):
    def __init__(self, *items):
        self.items = items

    def __str__(self):
        return f"({', '.join([item for item in self.items])})"


class DocReturns(object):
    def __init__(self, cls: type, desc: str):
        def strip_namespace(cls):
            return type_format(str(cls).split('.')[-1][:-2])

        if type(cls) is type:
            cls = strip_namespace(cls)
        elif type(cls) is tuple:
            cls = ClassTuple(*[strip_namespace(item) for item in cls])

        self.cls = cls
        self.desc = desc


class DocReference(object):
    def __init__(self, name: str, url: str):
        self.name = name
        self.url  = url


class DocExample(object):
    def __init__(self, code: str, result: str):
        self.code   = code
        self.result = result

    def load(self):
        from IPython import get_ipython
        get_ipython().set_next_input(self.code)


NEWLINE = '\n'
TAB = '\t'
QUOTE = '\"'



def autodoc(description: str=None, parameters: list=None, returns: DocReturns=None, examples: list=None, references: list=None):
    def _doc(func):
        parameters_str = ""
        returns_str    = ""
        references_str = ""
        examples_str   = ""

        if parameters:
            largest_param = max([len(param.name) + len(param.cls) for param in parameters])
            parameters_str = f"""

    Parameters:
    {NEWLINE.join([f'{TAB}{param.name}{" " * (largest_param + 1 - (len(param.name) + len(param.cls)))}({type_format(param.cls)}): {param.desc}' for param in parameters])}"""


        if returns:
            returns_str = f"""

    Returns:
    {TAB}{returns.cls}: {returns.desc}"""


        if examples:
            examples_str = f"""

    Examples:
    {(NEWLINE + NEWLINE).join([f'{TAB}>>> # Example {idx}{NEWLINE}' + NEWLINE.join([f'{TAB}>>> {line}' for line in example.code.splitlines()]) + f'{NEWLINE}{TAB}{example.result}' for idx, example in enumerate(examples)])}"""


        if references:
            references_str = f"""

    References:
    {NEWLINE.join([f'{TAB}{QUOTE + ref.name + QUOTE + " " if ref.name else ""}{ref.url}' for ref in references])}"""


        func.__doc__ = f"{description}{parameters_str}{returns_str}{examples_str}{references_str}"
        func.examples = examples
        return func
    return _doc
