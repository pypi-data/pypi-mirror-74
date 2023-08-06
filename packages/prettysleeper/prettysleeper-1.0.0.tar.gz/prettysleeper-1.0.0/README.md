# 🕛 prettysleeper 
## A Small Gimmick that makes waiting just a bit more fun by introducing a Wizard and a countdown timer to show the current waiting time with a running clock, emoji's and memes.

### How to use:
```
# -*- coding: utf-8 -*-
from prettysleeper import slpr
slpr(10)
```
**This will ouput something like this:**
```
🧙   🕛 sleeping for 5 
```
When it's done, the message is replaced with an alert:
```
🧙   Done!
```
Standard messages show a simple countdown and an alert message after, which can be customized using:
```
slpr(1, alert="YEET!")
```
**... will look like this:**
```
🧙   🕛 sleeping for 1 
🧙   YEET!
True
```

*All options:
slpr(time, alert="Done!", final=True, wiz="w"):
Try loading as module ;)
```
python -m wizprint
```