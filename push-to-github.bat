@echo off
echo ========================================
echo Pushing Student Management System to GitHub
echo ========================================
echo.

REM Check if remote exists
git remote get-url origin >nul 2>&1
if errorlevel 1 (
    echo Adding remote repository...
    git remote add origin https://github.com/PUNEETHPOOJARY08/Student-Management-System.git
)

echo Setting branch to main...
git branch -M main

echo Pushing to GitHub...
git push -u origin main

if errorlevel 1 (
    echo.
    echo ERROR: Failed to push to GitHub.
    echo Please check:
    echo 1. You have access to the repository
    echo 2. You are authenticated with GitHub
    echo 3. The repository exists at: https://github.com/PUNEETHPOOJARY08/Student-Management-System
    echo.
    pause
) else (
    echo.
    echo SUCCESS! Code pushed to GitHub successfully!
    echo Repository: https://github.com/PUNEETHPOOJARY08/Student-Management-System
    echo.
    pause
)

