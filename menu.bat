@echo off
setlocal
cd /d "%~dp0"

set "PYTHONIOENCODING=utf-8"
set "PYTHONUTF8=1"

title 4gnosin Control Center

if exist "%~dp0.venv\Scripts\activate.bat" (
  call "%~dp0.venv\Scripts\activate.bat"
)

python menu.py %*

if %ERRORLEVEL% neq 0 (
  echo.
  echo [ERROR] Process exited with code %ERRORLEVEL%.
  pause
)

endlocal
