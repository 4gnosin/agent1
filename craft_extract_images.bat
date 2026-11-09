@echo off
setlocal
cd /d "%~dp0"

set "PYTHONIOENCODING=utf-8"
set "PYTHONUTF8=1"

title 4gnosin - Standalone ArtCraft Image Extractor

echo ============================================================
echo   4gnosin - Standalone ArtCraft Image Extractor
echo   Extracts & optimizes PDF figures with PdfCraft + PhotoCraft
echo ============================================================
echo.

if exist "%~dp0.venv\Scripts\activate.bat" (
  call "%~dp0.venv\Scripts\activate.bat"
)

if "%~1"=="" (
  echo Usage: Drag and drop a PDF on this bat file or pass a path:
  echo   craft_extract_images.bat data\inbox\b_thermod_ch05.pdf
  echo.
  set /p PDF_PATH="Dwse diadromh PDF: "
) else (
  set "PDF_PATH=%~1"
)

if not exist "%PDF_PATH%" (
  echo [ERROR] To arxeio "%PDF_PATH%" den vre8hke!
  pause
  exit /b 1
)

echo.
echo Running: python "%~dp0extract_pdf_images_craft.py" "%PDF_PATH%" --format webp -v
python "%~dp0extract_pdf_images_craft.py" "%PDF_PATH%" --format webp -v
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
