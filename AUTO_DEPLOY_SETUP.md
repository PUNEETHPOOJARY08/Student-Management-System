# 🚀 Auto-Deploy Setup - Just Connect Your Repo!

I've configured everything so Railway and Vercel will auto-detect and deploy automatically!

## ✅ What I Fixed

1. ✅ **Railway**: Added `nixpacks.toml` - Railway will auto-detect Java/Maven
2. ✅ **Vercel**: Added `vercel.json` - Vercel will auto-detect Vite/React
3. ✅ **Dockerfile**: Fixed for Railway if it uses Docker
4. ✅ **All configs**: Set to auto-detect and deploy

---

## 🚂 Railway - Just 3 Clicks!

### Step 1: Connect Repo
1. Go to: **https://railway.app/new**
2. Click **"Deploy from GitHub repo"**
3. Select: **Student-Management-System**
4. **That's it!** Railway will auto-detect everything!

### Step 2: Add MySQL (After it starts building)
1. Click **"+ New"** → **"Database"** → **"Add MySQL"**

### Step 3: Add Environment Variables
1. Click your **service** (the one building)
2. Click **"Variables"** tab
3. Click **"+ New Variable"** and add these:

```
SPRING_DATASOURCE_URL=jdbc:mysql://${{MySQL.MYSQLHOST}}:${{MySQL.MYSQLPORT}}/${{MySQL.MYSQLDATABASE}}?useSSL=false&serverTimezone=UTC
SPRING_DATASOURCE_USERNAME=${{MySQL.MYSQLUSER}}
SPRING_DATASOURCE_PASSWORD=${{MySQL.MYSQLPASSWORD}}
SPRING_DATASOURCE_DRIVER_CLASS_NAME=com.mysql.cj.jdbc.Driver
```

**OR** Railway might auto-detect MySQL - if it does, you're done!

### Step 4: Get URL
1. Wait for build to finish (5-10 min)
2. Click **"Settings"** → **"Generate Domain"**
3. **Copy the URL!**

---

## ▲ Vercel - Just 2 Clicks!

### Step 1: Import
1. Go to: **https://vercel.com/new**
2. Click **"Import Git Repository"**
3. Select: **Student-Management-System**
4. **Vercel will auto-detect everything!**

### Step 2: Configure (If needed)
- **Root Directory**: Should auto-detect `frontend` ✅
- If not, click **"Edit"** → Type: `frontend`

### Step 3: Add Environment Variable
1. Scroll to **"Environment Variables"**
2. Click **"+ Add"**
3. Add:
   - **Key**: `VITE_API_URL`
   - **Value**: `https://your-railway-url.up.railway.app/api`
   - (Use your Railway URL from above!)

### Step 4: Deploy
1. Click **"Deploy"**
2. Wait 2-3 minutes
3. **Done!** ✅

---

## 🎯 That's It!

Both platforms will:
- ✅ Auto-detect your project type
- ✅ Auto-configure build settings
- ✅ Auto-deploy

**Just connect your GitHub repo and they'll do the rest!**

---

## 📝 Quick Checklist

**Railway:**
- [ ] Connected GitHub repo
- [ ] Added MySQL database
- [ ] Added environment variables (or Railway auto-added them)
- [ ] Got backend URL

**Vercel:**
- [ ] Connected GitHub repo
- [ ] Set Root Directory to `frontend` (if needed)
- [ ] Added VITE_API_URL variable
- [ ] Got frontend URL

**Final:**
- [ ] Added CORS variable to Railway
- [ ] Tested the app!

---

**Everything is configured for auto-deployment!** 🚀

