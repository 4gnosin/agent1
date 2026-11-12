@echo off
setlocal
chcp 65001 >nul
cd /d "%~dp0\.."

set "PYTHONIOENCODING=utf-8"
set "PYTHONUTF8=1"
set "PYTHONDONTWRITEBYTECODE=1"

title 4gnosin - LaTeX / KaTeX Sanitizer

if exist "%~dp0\..\.venv\Scripts\activate.bat" (
  call "%~dp0\..\.venv\Scripts\activate.bat"
)

python -m src.utils.latex_sanitizer %*

if %ERRORLEVEL% neq 0 (
  echo.
  echo [ERROR] Process exited with code %ERRORLEVEL%.
)

if "%~1"=="" (
  echo.
  pause
)

endlocal
