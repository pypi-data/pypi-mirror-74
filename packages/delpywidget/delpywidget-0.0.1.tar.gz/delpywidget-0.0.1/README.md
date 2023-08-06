# Delpy

Blockly on Jupyter Notebook with Python
This project is based on the work of gwangyi : https://github.com/gwangyi/delpy
The code was modified in order to include Delpy into the notebook as a widget and to be able to execute any Python code inside the notebook.

## Installation
For developer:

```bash
git clone https://github.com/Edwauline/DelpyWidget
cd delpy
pip install -e .
jupyter nbextension install delpy --py --sys-prefix --symlink
jupyter nbextension enable delpy --py
```

## Example

```python
from delpy import Delpy, delpy_method


class MyDelpy(DelpyWidget):
    @delpy_method("Category1")
    def hi(self):
        print("Hello!")

    @delpy_method("Category2")
    def hello(self, msg):
        print("Hello, ", msg, "!")

p = MyDelpy()
p
```
