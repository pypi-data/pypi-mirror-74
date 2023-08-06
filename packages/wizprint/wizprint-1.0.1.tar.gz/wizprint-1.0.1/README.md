# 🧙wizprint 
## A Small Gimmick that makes printing tasks to console just a bit more fun by introducing a Wizard that will tell your customized message in a bubble, with colors, emoji's and memes.

### How to use:
```
# -*- coding: utf-8 -*-
from wizprint import wprint
wprint("Hello, world!") 
```
**This will ouput something like this:**
```
 .://+///:-`   .://+++oo+++++//:-.`-:://////::-
 s+++++++++oo+oo+++++++++++++++++oo+++++++++++os. 
 'o˖˖Hello,˖world!˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖oo
  :/+++///::+ooooooo+os+++++s+oooo+oooooooooooo+/`
                        +o++o+`   `````     ```
                        -s+.
                           🧙
```
Standard messages show a small bubble, you can expand this however by adding a signature with the option signed, for example:
```
wprint("Hello, Pythonario", signed="Process Peach", wiz="p")
```
**... will look like this:**
```
   .://+///:-`  .://+++oo++++//:-.`-:://////::-
   s+++++++++oo+oo++++++++++++++++oo++++++++++os. 
 /s˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖os`
 :s˖˖Hello,˖Pythonario˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖os
 :s˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖os
 'o˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖oo
 .os˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖Process˖Peach˖˖˖˖˖˖˖˖˖oo
 'o˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖˖oo
  :/+++///::+ooooooo+os+++++s+oooo+oooooooooooo+/`
                        +o++o+`   `````     ```
                        -s+.
                           👸
```

### I want to try this, what do I need to do?
Download the code from GIT, from a Terminal:
```
git clone https://github.com/NamasteJasutin/wizprint && cd wizprint
python3 setup.py install
```
Replace python3 with python if that is your default command for a Python3.7> Interpreter.
Open a Python3.7> Shell and type:
```
from wizprint import wprint, fnt
wprint("Hello, Pythonario", signed="Process Peach", wiz="p", background=fnt.Y, foreground=fnt.R)
```
*All options:
wprint(message="", background=fnt.black, foreground=fnt.B, bgchar='˖', signed="", wiz="w")

For more font coloring options, use:
```
from wizprint import fnt
```
More info on fnt:
Format console: 
Colors: # For Blue use fnt.B
(P)urple, (B)lue, (G)reen, (Y)ellow, (R)ed.
Properties: # For bold use fnt.b
(b)old, (u)nderline, (i)talic, (c)lear
Example: f"{fnt.B}Blue {fnt.c}I am. {fnt.i}Roses {fnt.c}{fnt.b}are {fnt.R}Red{fnt.c}"
            Blue /     Clear /     Italic /      Clear / Bold /      Red /   Clear /

You can find Emoji's in 
```
fnt.emojis
```
I've included a few:
🧙, 👸, 👵, 👴, 🎅, 👮, 🕵, 👩, 👨, 👩, 🦸, 🧚.
