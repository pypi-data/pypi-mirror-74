# 🕛 prettysleeper 
## A Small Gimmick that makes waiting just a bit more fun by introducing a Wizard and a countdown timer to show the current waiting time with a running clock, emoji's and memes.

### How to install:
Download from pip:
```
python -m pip install prettysleeper
```

### How to use:
```
# -*- coding: utf-8 -*-
from prettysleeper import psleep
psleep(10)
```
**This will ouput something like this:**
```
🧙   🕛 sleeping for 10 
```
When it's done, the message is replaced with an alert:
```
🧙   Done!
```
Standard messages show a simple countdown and an alert message after, which can be customized using:
```
psleep(1, alert="YEET!")
```
**... will first like this:**
```
🧙   🕛 sleeping for 1 
```
**... then:**
```
🧙   YEET!
```

*All options:
psleep(time, alert="Done!", final=True, wiz="w"):
When final is set to False, there won't be a final True output after the alert.
Try loading as module ;)
```
python -m prettysleeper
```

For console usage, see:
```
psleep -h
```