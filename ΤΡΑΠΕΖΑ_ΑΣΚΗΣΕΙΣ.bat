@echo off
setlocal
cd /d "%~dp0"

echo ============================================================
echo   4gnosin - Trapezas Thematon (process-inbox)
echo   Place PDF/MD files in:  data\inbox\
echo   Then run this file (double-click)
echo ============================================================
echo.

if exist "%~dp0.venv\Scripts\activate.bat" (
  call "%~dp0.venv\Scripts\activate.bat"
) else (
  echo [!] .venv not found - using system Python
)

echo.
echo Running: python -m src.cli process-inbox
echo.
python -m src.cli process-inbox
set ERR=%ERRORLEVEL%

echo.
if %ERR% neq 0 (
  echo [ERROR] Exit code %ERR%
) else (
  echo [OK] Done.
)
echo.
pause
endlocal
