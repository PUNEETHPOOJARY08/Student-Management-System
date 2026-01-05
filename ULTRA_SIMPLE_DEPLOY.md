# 🚀 ULTRA SIMPLE - Just Connect Repo!

I've configured EVERYTHING for auto-deployment. Just connect your GitHub repo!

---

## 🚂 RAILWAY - 2 Steps Only!

### Step 1: Connect
1. Go to: **https://railway.app/new**
2. Click **"Deploy from GitHub repo"**
3. Find: **Student-Management-System**
4. Click it
5. **DONE!** Railway will auto-detect and start building!

### Step 2: Add Database (After build starts)
1. Click **"+ New"** (top right)
2. Click **"Database"**
3. Click **"Add MySQL"**
4. Railway will auto-connect it!

**That's it!** Railway will:
- ✅ Auto-detect Java/Maven
- ✅ Auto-build your app
- ✅ Auto-connect MySQL
- ✅ Give you a URL

**Wait 5-10 minutes, then get your URL from Settings → Generate Domain**

---

## ▲ VERCEL - 2 Steps Only!

### Step 1: Import
1. Go to: **https://vercel.com/new**
2. Click **"Import Git Repository"**
3. Find: **Student-Management-System**
4. Click **"Import"**
5. **Vercel will auto-detect everything!**

### Step 2: Add Environment Variable
1. Scroll to **"Environment Variables"**
2. Click **"+ Add"**
3. Type:
   - **Key**: `VITE_API_URL`
   - **Value**: `https://your-railway-url.up.railway.app/api`
   - (Get this from Railway after Step 1!)
4. Click **"Deploy"**

**That's it!** Vercel will:
- ✅ Auto-detect Vite/React
- ✅ Auto-build
- ✅ Give you a URL

---

## ✅ Final Step: CORS

Go back to Railway:
1. Click your service
2. Click **"Variables"**
3. Add:
   - **Name**: `SPRING_WEB_CORS_ALLOWED_ORIGINS`
   - **Value**: `https://your-vercel-url.vercel.app`
4. Save

---

## 🎯 That's It!

**Total time: 10 minutes**
**Total clicks: ~10 clicks**

Everything is auto-configured! Just connect and deploy!

---

## 📍 Exact URLs to Use:

**Railway:**
- https://railway.app/new
- Click "Deploy from GitHub repo"

**Vercel:**
- https://vercel.com/new
- Click "Import Git Repository"

**That's all you need!** 🚀

