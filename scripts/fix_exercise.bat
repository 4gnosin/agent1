@echo off
setlocal
cd /d "%~dp0\.."

set "PYTHONIOENCODING=utf-8"
set "PYTHONUTF8=1"

if exist "%~dp0\..\.venv\Scripts\activate.bat" (
  call "%~dp0\..\.venv\Scripts\activate.bat"
)

if not "%~1"=="" (
  python -m src.tools.exercise_fixer %*
  goto done
)

python -m src.tools.exercise_fixer

:done
if "%~1"=="" (
  pause
)
endlocal
