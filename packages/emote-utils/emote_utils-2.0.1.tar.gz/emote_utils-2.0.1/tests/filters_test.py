from typing import Any, List, Tuple

from emote_utils import SocialsFactory

f: SocialsFactory = SocialsFactory()

value: str = 'hello world'


@f.suffix('n', 'name')
def get_name(obj: object, suffix: str) -> Tuple[str, str]:
    return (value, value)


def test_normal() -> None:
    assert f.normal('this is a test.') == 'This is a test.'


def test_title() -> None:
    assert f.title(value) == value.title()


def test_upper() -> None:
    assert f.upper(value) == value.upper()


def test_lower() -> None:
    assert f.lower(value) == value.lower()


def test_defaults() -> None:
    args: List[Any] = ['%1n', [None]]
    f.lower_case_filter = 'upper'
    assert f.get_strings(*args)[0] == value.upper()
    f.lower_case_filter = None
    # Let's just ensured there's no typo or whatever in the above line.
    assert f.get_strings(*args)[0] == value
    args[0] = '%1Name'
    assert f.get_strings(*args)[0] == 'Hello world'
    args[0] = '%1NAME'
    assert f.get_strings(*args)[0] == value.upper()
