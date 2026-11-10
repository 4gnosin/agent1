@echo off
setlocal
cd /d "%~dp0\.."

set "PYTHONIOENCODING=utf-8"
set "PYTHONUTF8=1"

title 4gnosin - Process Inbox with ArtCraft

echo ============================================================
echo   4gnosin - Trapezas Thematon (process-inbox with ArtCraft)
echo   Place PDF/MD files in:  data\inbox\
echo   Engine: PdfCraft + PhotoCraft (WebP / 0-error vectors)
echo   Then calls Gemini API for exercise generation
echo ============================================================
echo.

if exist "%~dp0\..\.venv\Scripts\activate.bat" (
  call "%~dp0\..\.venv\Scripts\activate.bat"
) else (
  echo [!] .venv not found - using system Python
)

echo.
echo Running: python -m src.cli process-inbox --craft %*
echo.
python -m src.cli process-inbox --craft %*
set ERR=%ERRORLEVEL%

echo.
if %ERR% neq 0 (
  echo [ERROR] Exit code %ERR%
) else (
  echo [OK] Done. All exercises and ArtCraft images processed.
)
echo.
pause
endlocal
