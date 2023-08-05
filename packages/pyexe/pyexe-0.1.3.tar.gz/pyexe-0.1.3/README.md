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
lc.exe("mkdir myfolder")
lc.setPath("./myfolder")
lc.exe("git status")
```

#### Remote

```
from pyexe import Remote

rm= Remote("162.158.50.246", "root", "password")
rm.connect()
rm.setPath("/var/www")
rm.exe("ls")
```

#### Git automation

```
from pyexe import Local, Remote

lc= Local()
lc.git.add()
lc.git.commit("initial commit")
lc.git.push()
# or shortcut for above 3 commands
lc.git.put()

rm- Remote(......)
rm.git.pull()
```
