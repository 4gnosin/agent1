@echo off
setlocal
cd /d "%~dp0"

echo ============================================================
echo   Fix stems + optional rename chNN- on exercise files
echo ============================================================
echo.

if exist "%~dp0.venv\Scripts\activate.bat" (
  call "%~dp0.venv\Scripts\activate.bat"
)

REM Default: site next to agent1.1 (artifacts\site). Override with first arg.
set SITE=%~1
if "%SITE%"=="" set SITE=%~dp0..\site

echo Site: %SITE%
echo.
python -m src.cli fix-stems -o "%SITE%" --rename
echo.
pause
endlocal
