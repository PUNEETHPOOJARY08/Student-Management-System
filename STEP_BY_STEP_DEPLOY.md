# 🚀 Step-by-Step Deployment Guide

## 📋 Prerequisites Checklist

- [ ] GitHub account created
- [ ] Code is ready in your project folder
- [ ] MySQL database credentials ready (or use cloud database)

---

## STEP 1: Push Code to GitHub

### 1.1 Check Git Status
```powershell
cd C:\Users\HP\OneDrive\Desktop\StudentDatabase
git status
```

### 1.2 If Not Initialized, Initialize Git
```powershell
git init
git add .
git commit -m "Student Management System - Ready for deployment"
```

### 1.3 Add GitHub Remote and Push
```powershell
git remote add origin https://github.com/PUNEETHPOOJARY08/Student-Management-System.git
git branch -M main
git push -u origin main
```

**If you get authentication error:**
- Use GitHub Personal Access Token instead of password
- Or use GitHub Desktop app

---

## STEP 2: Deploy Backend to Railway (Easiest Option)

### 2.1 Create Railway Account
1. Go to: **https://railway.app**
2. Click **"Start a New Project"**
3. Sign up with **GitHub** (recommended)

### 2.2 Deploy Your Backend
1. Click **"New Project"**
2. Select **"Deploy from GitHub repo"**
3. Choose: **Student-Management-System**
4. Railway will detect it's a Java project

### 2.3 Configure Backend Service
1. Click on the service
2. Go to **Settings** tab
3. Set:
   - **Root Directory**: `backend`
   - **Build Command**: `mvn clean install -DskipTests`
   - **Start Command**: `mvn spring-boot:run`

### 2.4 Add MySQL Database
1. Click **"+ New"** button
2. Select **"Database"** → **"MySQL"**
3. Railway will create a MySQL database automatically
4. Copy the connection details (you'll need them)

### 2.5 Set Environment Variables
In your backend service **Settings** → **Variables**, add:

```
SPRING_DATASOURCE_URL=jdbc:mysql://[MYSQL_HOST]:[MYSQL_PORT]/railway?useSSL=false&serverTimezone=UTC
SPRING_DATASOURCE_USERNAME=[MYSQL_USER]
SPRING_DATASOURCE_PASSWORD=[MYSQL_PASSWORD]
SPRING_DATASOURCE_DRIVER_CLASS_NAME=com.mysql.cj.jdbc.Driver
```

**Tip**: Railway provides these values in the MySQL service's **Connect** tab. Copy the JDBC URL format.

### 2.6 Deploy!
1. Railway will automatically deploy
2. Wait for build to complete (5-10 minutes first time)
3. You'll get a URL like: `https://your-app.up.railway.app`
4. **Copy this URL** - you'll need it for frontend!

---

## STEP 3: Deploy Frontend to Vercel

### 3.1 Create Vercel Account
1. Go to: **https://vercel.com**
2. Click **"Sign Up"**
3. Sign up with **GitHub** (recommended)

### 3.2 Import Your Project
1. Click **"Add New"** → **"Project"**
2. Import **Student-Management-System** repository
3. Click **"Import"**

### 3.3 Configure Frontend
1. **Framework Preset**: Vite (auto-detected)
2. **Root Directory**: `frontend` (IMPORTANT!)
3. **Build Command**: `npm run build` (auto-filled)
4. **Output Directory**: `dist` (auto-filled)

### 3.4 Set Environment Variable
Click **"Environment Variables"** and add:

```
VITE_API_URL=https://your-backend-url.up.railway.app/api
```

Replace `your-backend-url` with your actual Railway backend URL!

### 3.5 Deploy!
1. Click **"Deploy"**
2. Wait 2-3 minutes
3. You'll get a URL like: `https://student-management-system.vercel.app`
4. **This is your live application!** 🎉

---

## STEP 4: Update CORS (Important!)

### 4.1 Update Backend CORS
Go back to **Railway** → Your backend service → **Variables**

Add this variable:
```
SPRING_WEB_CORS_ALLOWED_ORIGINS=https://your-frontend.vercel.app
```

Replace with your actual Vercel frontend URL!

### 4.2 Redeploy Backend
Railway will automatically redeploy when you save the variable.

---

## STEP 5: Test Your Deployment

### 5.1 Test Frontend
1. Visit your Vercel URL
2. Try creating a student
3. Check if it saves

### 5.2 Test Backend API
Visit: `https://your-backend.up.railway.app/api/students`
You should see: `[]` (empty array) or your students data

### 5.3 Test Full Flow
1. Create a student in frontend
2. Refresh the page
3. Student should still be there (saved in database)
4. Try update and delete

---

## 🎯 Your Live Application Links

After deployment, you'll have:

- **Frontend**: `https://your-app.vercel.app`
- **Backend API**: `https://your-backend.up.railway.app/api/students`

**Share these links with others!** 🌐

---

## 🆘 Common Issues & Solutions

### Issue: Backend won't start
**Solution**: 
- Check environment variables are set correctly
- Verify MySQL connection string format
- Check Railway logs for errors

### Issue: Frontend can't connect to backend
**Solution**:
- Verify `VITE_API_URL` is correct
- Check CORS settings in backend
- Test backend URL directly in browser

### Issue: Database connection fails
**Solution**:
- Double-check MySQL credentials
- Ensure connection string includes `?useSSL=false&serverTimezone=UTC`
- Verify database is accessible from Railway

### Issue: Build fails
**Solution**:
- Check build logs in Railway/Vercel
- Ensure all dependencies are in `pom.xml` and `package.json`
- Verify Java and Node.js versions are compatible

---

## 📝 Quick Reference Commands

### Push to GitHub
```powershell
cd C:\Users\HP\OneDrive\Desktop\StudentDatabase
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Check Deployment Status
- **Railway**: https://railway.app/dashboard
- **Vercel**: https://vercel.com/dashboard

---

## ✅ Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Railway account created
- [ ] Backend deployed on Railway
- [ ] MySQL database added
- [ ] Environment variables set
- [ ] Backend URL copied
- [ ] Vercel account created
- [ ] Frontend deployed on Vercel
- [ ] VITE_API_URL set correctly
- [ ] CORS updated in backend
- [ ] Application tested
- [ ] Links saved

---

## 🎉 Congratulations!

Your Student Management System is now live on the internet! 

Share your application URL with others and show off your work! 🚀

---

**Need help?** Check the logs in Railway and Vercel dashboards for detailed error messages.

