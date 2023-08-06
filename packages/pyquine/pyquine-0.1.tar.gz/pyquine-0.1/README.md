# `python3`, more like `cat`

When imported, `pyquine` prints the source of the main module.

There's the standard:
```python
import quine
```

But `pyquine` supports any source file that manages to import it:
```python
#!/usr/bin/env python3
"""This is my quine. It prints its own source."""

import     quine
```

It's cheating, but that's the point.
Because PyPI deserves a good quine variation of the "import *XXX*" meme.

[![xkcd #353: Python](https://imgs.xkcd.com/comics/python.png "xkcd #353: Python")](https://xkcd.com/353/)
