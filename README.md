<p align="center">

<img style="float: right;" width="100px" src="https://raw.githubusercontent.com/Zlynt/Reh-Store/main/docs/images/logo_rehstore.svg">
<h1 align="center">Console</h1>

***<p align="center">Same console, more functions</p>***
<p/>

# Description
This module extends the native NodeJS console by addind text/background colors and other functions.

<br/>

# How to use
Change text color syntax: 
- console.text["COLOR_HERE"]\(TEXT)

<br/>

Change text background color syntax: 
- console.background["COLOR_HERE"]\(TEXT)

<br/>

Create a Line Like " [ TITLE ] MESSAGE ": 
- console.logWithTitle(TITLE, MESSAGE)

<br/>

Create a custom box:
- console.textInBox(MESSAGE HERE, COLOR_HERE)

The custom box shows has following:
```
===========================
=       MESSAGE HERE      =
===========================
```

<br/>

Available text related codes (to be used has color codes) are the following:
- green, red, yellow, blue, magenta, cyan, white, black, underscore, bright, reverse, bold

<br/>

Available text background codes (to be used has color codes) are the following:
- green, red, yellow, blue, magenta, cyan, white, black
