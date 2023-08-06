# simple-assertions

Assertion library (skeleton) inspired from [assertpy](https://github.com/assertpy/assertpy) but without batteries! also allows to convert all the assertions to warnings, just like delayed asserts.

[![Build Status](https://travis-ci.org/ninadmhatre/simple-assertions.svg?branch=master)](https://travis-ci.org/ninadmhatre/simple-assertions)

# Motivation

`assertpy` is beautiful library but for my needs it's too much, i really loved the API of
`assertpy` so i created new module because of following reasons

please check `tests/test_*.py` for use cases. 

1. I wanted `assert_warn` to be dynamic, i.e. given certain condition all assertions are converted to
warning.
   - I added `ASSERT_ERROR_AS_WARNING` variable which can do that!
   - Modified `assert_that` API to make is call based with `assert_that(.., as_warn=True)`
2. Extending is possible but i wanted more intuitive logic
   - I exposed the `SimpleAssertions` class, and just inherit it to add new method
3. `assert_that` in `assertpy` creates new instance of class and loads all the extensions on every
call, and i wanted to avoid that!
   - By exposing the `SimpleAssertion` class, you can just make it part of your assertion class

> Note: earlier i used `assert_that` keyword from `assertpy` but i felt like it's copying from other library
>, so i changed `assert_that` to `check`, while reading this gives same amount of experience but saved 6 chars!

## Installation

```
pip install simple-assertions
```

## Usage

Please check `tests` files for more usage here is only basic usage

### As Function
Just import the `check` function, and away you go...

```python
from simple_assertions import check

def test_something():
    check(4 + 10).is_equal_to(14)
    check(1).is_instance_of(int)
    check(3, "lucky_num", as_warn=True).is_equal_to(4)
```

### As instance

```python
from simple_assertions import SimpleAssertions

class YourTestClass:
    def __init__(self):
        self.check = SimpleAssertions().check

    def test_something(self):
        self.check(4 + 10).is_equal_to(14)
        self.check(1).is_instance_of(int)
        self.check(3, "lucky_num", as_warn=True).is_equal_to(4)      
```

### Add your own batteries
```python
from simple_assertions import SimpleAssertions
from typing import Union

class YourAssertions(SimpleAssertions):
    def __init__(self, as_warn=False, logger=None):
        super().__init__(as_warn, logger)

    def is_greater_than(self, other: Union[int, float]):
        if self.val_to_chk.val < other:
            self.raise_err(self.compare_err_msg(other, "to be greater than"))
        return self


class YourTestClass:
    def __init__(self):
        self.check = YourAssertions().check

    def test_something(self):
        self.check(4 + 10).is_greater_than(10).is_equal_to(14)
        self.check(1).is_instance_of(int)
        self.check(3, "lucky_num", as_warn=True).is_equal_to(4)      
```

Though only checked with `unittests` but it should work fine with [pytest](http://pytest.org/) or [Nose](http://nose.readthedocs.org/).
