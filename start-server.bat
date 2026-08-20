@echo off
title CAVA Mediterranean Menu Server
echo ==========================================================
echo Starting CAVA Mediterranean Menu Local Server...
echo ==========================================================
start http://localhost:8080
powershell -ExecutionPolicy Bypass -File "%~dp0server.ps1" -Port 8080
pause
