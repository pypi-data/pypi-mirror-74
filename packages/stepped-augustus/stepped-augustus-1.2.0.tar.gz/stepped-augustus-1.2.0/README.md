# stepped-augustus
[![Current Version](https://img.shields.io/pypi/v/stepped-augustus?style=flat)](https://pypi.org/project/stepped-augustus)
[![Python Versions](https://img.shields.io/pypi/pyversions/stepped-augustus?style=flat)](https://pypi.org/project/stepped-augustus)
[![License](https://img.shields.io/pypi/l/stepped-augustus?style=flat)](https://opensource.org/licenses/MIT)
[![Code style: black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/psf/black)
[![PR's Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)


A variation of the Augustus Cipher that offsets space-separated words based on the position of each character; contrary to what Augustus had originally practiced, letters wrap around instead of presenting a special case.


> "Whenever he wrote in cipher, he wrote B for A, C for B, and the rest of the letters on the same principle, using AA for X."

Suetonius, _Life of Augustus_ 88


# Installation
Through `pip`:
```bash
λ> python -m pip install stepped-augustus
```

# Usage
As a CLI application:
```bash
λ> augustus -h
usage: augustus [-h] [--direction {left,right}] [--multiplier MULTIPLIER] message

Ciphers a given message.

positional arguments:
  message               The message to be ciphered

optional arguments:
  -h, --help            show this help message and exit
  --direction {left,right}
                        The direction to cipher the message to
  --multiplier MULTIPLIER
                        The multiplier to be applied when ciphering a message

λ> augustus "Hello, World" --direction right --multiplier 1
Igopt, Xqupi

λ> augustus "Igopt, Xqupi" --direction left --multiplier 1
Hello, World
```
As a package:
```python
>>> from augustus import SteppedAugustus as SA
>>>
>>> SA("Hello, World", 1).right_cipher
'Igopt, Xqupi'
>>>
>>> SA("Igopt, Xqupi", 1).left_cipher
'Hello, World'
>>>
>>> # Alternatively the _cipher method can be used for lazy
>>> # evaluation and customizing the direction.
>>>
>>> for char in SA("Hello", 1)._cipher(1):
...     print(char)
>>>
>>> # Additionally, skip_chars and stop_chars can specified
>>> # to semantically modify the behaviour of the algorithm.
>>>
>>> # Shifts with 10234
>>> SA("Hello", skip_chars="H").right_cipher
'Ienos'
>>>
>>> # Shifts with 11234
>>> SA("Hello", stop_chars="e").right_cipher
'Ifnos'
>>>
>>> # Shifts with 10123
>>> SA("Hello", skip_chars="e", stop_chars="e").right_cipher
'Iemnr'
```

