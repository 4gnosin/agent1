@echo off
chcp 65001 >nul
setlocal
set PYTHONIOENCODING=utf-8
cd /d "%~dp0"

echo ============================================================
echo   Trapeza Thematon (trapeza7.py)
echo   Destination: data\inbox\
echo ============================================================
echo.

if exist "%~dp0.venv\Scripts\activate.bat" (
  call "%~dp0.venv\Scripts\activate.bat"
)

echo.
python "%~dp0trapeza7.py" %*
set ERR=%ERRORLEVEL%

echo.
if "%ERR%" neq "0" (
  echo [ERROR] Exit code: %ERR%
) else (
  echo [OK] Completed successfully.
)
echo.
pause
endlocal
