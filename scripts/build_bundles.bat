@echo off
chcp 65001 >nul
title 4gnosin - Build Subject Bundles
cd /d "%~dp0\.."

echo ========================================================================
echo   4gnosin - Κατασκευή Bundles Μαθημάτων (High-Speed Lazy Loading)
echo ========================================================================
python scripts\build_bundles.py %*
echo.
pause
