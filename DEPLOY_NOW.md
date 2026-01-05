# 🚀 Quick Deployment Guide

## Step 1: Push to GitHub (If Not Done)

```powershell
cd C:\Users\HP\OneDrive\Desktop\StudentDatabase
git remote -v
```

If no remote is set:
```powershell
git remote add origin https://github.com/PUNEETHPOOJARY08/Student-Management-System.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy Backend (Choose One Platform)

### Option A: Railway (Recommended - Easiest)

1. **Go to**: https://railway.app
2. **Sign up** with GitHub
3. **New Project** → **Deploy from GitHub repo**
4. **Select** your repository: `Student-Management-System`
5. **Add MySQL Database**:
   - Click **+ New** → **Database** → **MySQL**
6. **Configure Backend**:
   - Root Directory: `backend`
   - Build Command: `mvn clean install -DskipTests`
   - Start Command: `mvn spring-boot:run`
7. **Set Environment Variables**:
   - `SPRING_DATASOURCE_URL` = `jdbc:mysql://[host]:[port]/railway?useSSL=false&serverTimezone=UTC`
   - `SPRING_DATASOURCE_USERNAME` = (from MySQL service)
   - `SPRING_DATASOURCE_PASSWORD` = (from MySQL service)
   - `SPRING_DATASOURCE_DRIVER_CLASS_NAME` = `com.mysql.cj.jdbc.Driver`
8. **Deploy!** Railway will give you a URL like: `https://your-app.railway.app`

### Option B: Render

1. **Go to**: https://render.com
2. **Sign up** with GitHub
3. **New** → **Web Service**
4. **Connect** your GitHub repository
5. **Settings**:
   - Name: `student-management-backend`
   - Root Directory: `backend`
   - Build Command: `cd backend && mvn clean install -DskipTests`
   - Start Command: `cd backend && mvn spring-boot:run`
6. **Add MySQL Database**:
   - New → PostgreSQL/MySQL → MySQL
   - Copy connection details
7. **Environment Variables** (same as Railway)
8. **Deploy!**

### Option C: Heroku

1. **Install Heroku CLI**: https://devcenter.heroku.com/articles/heroku-cli
2. **Login**: `heroku login`
3. **Create App**: `heroku create student-management-backend`
4. **Add MySQL**: `heroku addons:create cleardb:ignite`
5. **Set Config Vars**: `heroku config:set SPRING_DATASOURCE_URL=...`
6. **Deploy**: `git push heroku main`

## Step 3: Deploy Frontend

### Option A: Vercel (Recommended - Easiest)

1. **Go to**: https://vercel.com
2. **Sign up** with GitHub
3. **New Project** → **Import** your repository
4. **Configure**:
   - Framework Preset: `Vite`
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. **Environment Variables**:
   - `VITE_API_URL` = `https://your-backend-url.railway.app/api`
6. **Deploy!** You'll get: `https://your-app.vercel.app`

### Option B: Netlify

1. **Go to**: https://netlify.com
2. **Sign up** with GitHub
3. **Add new site** → **Import from Git**
4. **Settings**:
   - Base directory: `frontend`
   - Build command: `npm run build`
   - Publish directory: `frontend/dist`
5. **Environment Variables**:
   - `VITE_API_URL` = `https://your-backend-url.railway.app/api`
6. **Deploy!**

## Step 4: Update CORS in Backend

After deploying frontend, update backend CORS to allow your frontend domain:

**In Railway/Render/Heroku**, add environment variable:
```
SPRING_WEB_CORS_ALLOWED_ORIGINS=https://your-frontend.vercel.app
```

Or update `StudentController.java`:
```java
@CrossOrigin(origins = "https://your-frontend.vercel.app")
```

## Step 5: Test Your Deployment

1. Visit your frontend URL
2. Try creating a student
3. Check if data persists (refresh page)
4. Test update and delete operations

## 📝 Quick Checklist

- [ ] Code pushed to GitHub
- [ ] Backend deployed (Railway/Render/Heroku)
- [ ] MySQL database connected
- [ ] Frontend deployed (Vercel/Netlify)
- [ ] Environment variables set
- [ ] CORS configured
- [ ] Tested all CRUD operations

## 🔗 Your Deployment Links

After deployment, you'll have:
- **Frontend**: `https://your-app.vercel.app`
- **Backend API**: `https://your-backend.railway.app/api/students`

## 💡 Pro Tips

1. **Free Tier Limits**: 
   - Railway: 500 hours/month free
   - Vercel: Unlimited for personal projects
   - Render: Free tier available

2. **Database**: Use Railway MySQL (free tier) or PlanetScale (free tier)

3. **Custom Domain**: Both Vercel and Railway support custom domains

4. **Monitoring**: Check logs in your deployment platform dashboard

## 🆘 Troubleshooting

**Backend won't start:**
- Check environment variables
- Verify database connection string
- Check build logs

**Frontend can't connect:**
- Verify `VITE_API_URL` is correct
- Check CORS settings
- Test backend URL directly in browser

**Database connection fails:**
- Verify credentials
- Check if database is accessible
- Ensure connection string format is correct

---

**Need help?** Check the detailed `DEPLOYMENT.md` file!

