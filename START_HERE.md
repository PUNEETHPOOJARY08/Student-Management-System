# 🚀 START HERE - Quick Deployment

## You're in the backend directory. Here's what to do next:

### Option 1: Deploy Now (Recommended)

1. **Go back to root directory:**
   ```powershell
   cd ..
   ```

2. **Push to GitHub:**
   ```powershell
   git remote add origin https://github.com/PUNEETHPOOJARY08/Student-Management-System.git
   git branch -M main
   git push -u origin main
   ```

3. **Deploy Backend (Railway):**
   - Go to: https://railway.app
   - Sign up with GitHub
   - New Project → Deploy from GitHub
   - Select your repo
   - Add MySQL database
   - Set environment variables (see STEP_BY_STEP_DEPLOY.md)

4. **Deploy Frontend (Vercel):**
   - Go to: https://vercel.com
   - Sign up with GitHub
   - Import your repo
   - Root Directory: `frontend`
   - Set `VITE_API_URL` to your Railway backend URL

### Option 2: Test Locally First

1. **Set up MySQL:**
   - Start MySQL server
   - Update `src/main/resources/application.properties` with your MySQL password

2. **Run Backend:**
   ```powershell
   # Make sure JAVA_HOME is set
   $env:JAVA_HOME="C:\Program Files\Java\jdk-24"  # Adjust path
   .\mvnw.cmd spring-boot:run
   ```

3. **Run Frontend (new terminal):**
   ```powershell
   cd ..\frontend
   npm install
   npm run dev
   ```

## 📚 Detailed Guides

- **STEP_BY_STEP_DEPLOY.md** - Complete deployment walkthrough
- **DEPLOY_NOW.md** - Quick deployment reference
- **DEPLOYMENT.md** - Original deployment guide

## 🎯 Quick Links

- Railway: https://railway.app
- Vercel: https://vercel.com
- Your GitHub: https://github.com/PUNEETHPOOJARY08/Student-Management-System

---

**Choose your path and follow the guide!** 🚀

