@echo off
cd /d "%~dp0"
echo Starting GoldenState site at http://localhost:8000  (close this window to stop)
start "" cmd /c "timeout /t 2 >nul & start http://localhost:8000"
python -m http.server 8000
if errorlevel 1 py -m http.server 8000
if errorlevel 1 echo Python was not found. Install Python from python.org, or use VS Code Live Server.
pause
