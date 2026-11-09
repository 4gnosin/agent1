@echo off
setlocal
cd /d "%~dp0"

set "PYTHONIOENCODING=utf-8"
set "PYTHONUTF8=1"

title 4gnosin WebP Image Optimizer

if exist "%~dp0.venv\Scripts\activate.bat" (
  call "%~dp0.venv\Scripts\activate.bat"
)

python optimize_images_to_webp.py %*

if %ERRORLEVEL% neq 0 (
  echo.
  echo [ERROR] Process exited with code %ERRORLEVEL%.
)

echo.
pause
endlocal
