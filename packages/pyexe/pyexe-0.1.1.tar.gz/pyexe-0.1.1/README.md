# pyexe

Python package to execute commands on local and remote server.

### Installation

```
pip install pyexe
```

### Uses

#### Local

```
from pyexe import Local

lc= Local()
lc.exe("git status")
```

#### Remote

```
from pyexe import Remote

rm= Remote("1.1.1.1", "root", "password")
rm.connect()
rm.exe("ls")
```
