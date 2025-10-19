# Quick Install Script for FutureCars Platform

# This script automates the setup process
# Run in PowerShell (Windows) or adapt for bash (Mac/Linux)

Write-Host "🚀 FutureCars Platform Setup" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan

# Check Node.js
Write-Host "`n1️⃣ Checking Node.js..." -ForegroundColor Yellow
if (Get-Command node -ErrorAction SilentlyContinue) {
    $nodeVersion = node --version
    Write-Host "✅ Node.js $nodeVersion found" -ForegroundColor Green
} else {
    Write-Host "❌ Node.js not found. Please install from https://nodejs.org" -ForegroundColor Red
    exit
}

# Check Python
Write-Host "`n2️⃣ Checking Python..." -ForegroundColor Yellow
if (Get-Command python -ErrorAction SilentlyContinue) {
    $pythonVersion = python --version
    Write-Host "✅ $pythonVersion found" -ForegroundColor Green
} else {
    Write-Host "❌ Python not found. Please install from https://python.org" -ForegroundColor Red
    exit
}

# Install Frontend Dependencies
Write-Host "`n3️⃣ Installing frontend dependencies..." -ForegroundColor Yellow
npm install
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Frontend dependencies installed" -ForegroundColor Green
} else {
    Write-Host "❌ Frontend installation failed" -ForegroundColor Red
    exit
}

# Setup Backend
Write-Host "`n4️⃣ Setting up backend..." -ForegroundColor Yellow
cd backend

# Create virtual environment
Write-Host "   Creating Python virtual environment..." -ForegroundColor Cyan
python -m venv venv

# Activate virtual environment
Write-Host "   Activating virtual environment..." -ForegroundColor Cyan
& .\venv\Scripts\Activate.ps1

# Install Python dependencies
Write-Host "   Installing Python dependencies..." -ForegroundColor Cyan
pip install -r requirements.txt

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Backend dependencies installed" -ForegroundColor Green
} else {
    Write-Host "❌ Backend installation failed" -ForegroundColor Red
    cd ..
    exit
}

cd ..

# Setup Environment Variables
Write-Host "`n5️⃣ Setting up environment variables..." -ForegroundColor Yellow
if (-not (Test-Path .env.local)) {
    Copy-Item .env.example .env.local
    Write-Host "✅ .env.local created (Please edit with your API keys)" -ForegroundColor Green
} else {
    Write-Host "⚠️ .env.local already exists" -ForegroundColor Yellow
}

# Summary
Write-Host "`n================================" -ForegroundColor Cyan
Write-Host "✨ Setup Complete!" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Cyan

Write-Host "`nNext Steps:" -ForegroundColor Yellow
Write-Host "1. Edit .env.local with your API keys" -ForegroundColor White
Write-Host "2. Start MongoDB (if local)" -ForegroundColor White
Write-Host "3. Run 'npm run dev' for frontend" -ForegroundColor White
Write-Host "4. Run 'cd backend && .\venv\Scripts\activate && uvicorn main:app --reload' for backend" -ForegroundColor White

Write-Host "`nDocumentation:" -ForegroundColor Yellow
Write-Host "📚 README.md - Full documentation" -ForegroundColor White
Write-Host "🚀 SETUP.md - Detailed setup guide" -ForegroundColor White
Write-Host "🌐 DEPLOYMENT.md - Production deployment" -ForegroundColor White

Write-Host "`n🎉 Happy coding!" -ForegroundColor Cyan
