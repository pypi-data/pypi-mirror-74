SET /P AREYOUSURE=Start build? (y)?
IF /I "%AREYOUSURE%" NEQ "y" GOTO END
python setup.py
