
![](resources/logo-graphic.png)
# Sitecheck Scanner
#### Intended for Geo-Instruments Internal use

__author__ = Dan Edens
__version__ = 0.8.1

---
# Description
This tool provides convenient and interactive
troubleshooting tools for AMP and QV

It provides a Sensor status report in the form of an
[Adaptive Cards](https://docs.microsoft.com/en-us/power-automate/overview-adaptive-cards) to the user through Microsoft Teams.

![](resources/Cardexample.jpg)
This is Achived by creating a Json file in the user's Keller - OneDrive.

The user can than prompt the Flowbot to ingest the data via the Team's chat
```
run flow 1
```

![](resources/Run flow 1.jpg)


---

# Setup

## Part 1 - Program Install
# TODO: fix
You can launch Scanner.cmd from Icon in folder, or activate the bin from command line by running:
```
pip install
```
Than use "run" followed by your options
```
run --verbose -p upsondrivevms
```


### Power Automate Import instructions

---

### Description

Power Automate ingests Adaptive cards from the user's OneDrive and posts to chat through the Flowbot

---

## Install
## Part 2 - Microsoft Flow Import.

Follow this link to [Import the Flow Package](Flow/ImportPackage.url)
---

<img src="resources/importpackage1.jpg" alt="" />


Select [Scanner_flow.zip](Flow/Scanner_flow.zip) file from the Flow folder
---

<img src="resources/importpackage2.jpg" alt="" />


Select "create as new" and add your email to the connectors.
---
<img src="resources/importpackage3.jpg" alt="" />


Success message
---

<img src="resources/importpackage4.jpg" alt="" />


---

Change the value to your own Username
---
<img src="resources/importpackage5.jpg" alt="" />


This should match your PC User directory.
---

<img src="resources/importpackage6.jpg" alt="" />


---

Documentation

[Power Automate](https://docs.microsoft.com/en-us/power-automate/) is an included part of our Keller package with microsoft, and Importing the flowbot  script is simple.

