@echo off
REM git diff --no-ext-diff>>%USERPROFILE%\Scrapper_diff.log && notepad %USERPROFILE%\Scrapper_diff.log
REM echo ctrl-c break before closing notepad to cancel
REM taskkill /F /IM chrome.exe
cd ..
echo git clone git@github.com:DanEdens/Sitecheck_Scrapper.git>Sitecheck_install.cmd
echo cd Sitecheck_Scrapper>>Sitecheck_install.cmd
echo python setup.py install>>Sitecheck_install.cmd
echo cd ..>>Sitecheck_install.cmd
echo del %%0 >>Sitecheck_install.cmd
rm -rf Sitecheck_Scrapper
echo Project removed and a reinstall script has been generated in its place
