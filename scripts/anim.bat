@echo off
setlocal
cd /d "%~dp0\.."

set "PYTHONIOENCODING=utf-8"
set "PYTHONUTF8=1"

title 4gnosin Computational Exercise Animator

if exist "%~dp0\..\.venv\Scripts\activate.bat" (
  call "%~dp0\..\.venv\Scripts\activate.bat"
)

python -m src.tools.calc_animator %*

if %ERRORLEVEL% neq 0 (
  echo.
  echo [ERROR] Execution failed with exit code %ERRORLEVEL%.
)

if "%~1"=="" (
  pause
)
endlocal
