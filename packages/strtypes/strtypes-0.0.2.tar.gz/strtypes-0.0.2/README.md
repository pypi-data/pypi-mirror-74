# Str Types

Python library for managing string types

```shell
pip install strtypes
```

## Links

- PyPI: https://pypi.org/project/strtypes/
- GitHub: https://github.com/ibrag8998/strtypes

## Quick Overview

Define a class that inherits from `StrTyped`,
then define any number of `StrType` objects, like this:

```python
from strtypes import StrTyped, StrType

class StatusTypes(StrTyped):
    active = StrType('active')
    hold = StrType('hold')
```

## Example

```python
from strtypes import DjangoStrTyped, StrType

class QTypes(DjangoStrTyped):
    radio = StrType("radio", "one from list")
    checkbox = StrType("checkbox", "many from list")
    user_input = StrType("user_input", "user input")
    not_an_strtype = "..."
```

Here is what you got:

```python
assert QTypes.radio == "radio"
assert "user_input" == QTypes.user_input
assert str(QTypes.checkbox) == "checkbox"
assert len(QTypes.all_strtypes()) == 3
assert len(QTypes.choices_style()) == 3
assert QTypes.choices_style()[0] == ("radio", "one from list")
```

You may notice that this package comes with DjangoStrTyped which has some special
methods for django development.

More examples in `examples/` directory
