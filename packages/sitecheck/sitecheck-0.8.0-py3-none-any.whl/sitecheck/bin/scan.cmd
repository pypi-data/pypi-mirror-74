@echo off
cls
echo Run Initiated - %TIME%
echo ************
echo ************

REM You can store your run settings by adding them to the end of the next line. "%* --headless"
python ../__main__.py --info %*

echo ************
echo ************
echo Run Complete - %TIME%

