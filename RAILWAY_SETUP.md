# 🚂 Railway Setup Instructions

## ✅ Fixed the Build Issue!

I've created a Dockerfile that includes Maven. Railway should now build successfully.

## 🔧 Configure Railway Service

### Step 1: Update Service Settings

In Railway dashboard:

1. **Go to your service** → **Settings**
2. **Root Directory**: Set to `backend` (if not already set)
3. **OR** keep it as root and the Dockerfile will handle it

### Step 2: Configure Build

**Option A: Use Dockerfile (Recommended)**
- Railway should auto-detect the Dockerfile
- If not, go to Settings → Build → Dockerfile Path: `backend/Dockerfile`

**Option B: Use NIXPACKS**
- If Dockerfile doesn't work, Railway will use `backend/nixpacks.toml`
- This configures Maven and Java 17

### Step 3: Set Environment Variables

In Railway → Your Service → Variables, add:

```
SPRING_DATASOURCE_URL=jdbc:mysql://[MYSQL_HOST]:[MYSQL_PORT]/railway?useSSL=false&serverTimezone=UTC
SPRING_DATASOURCE_USERNAME=[MYSQL_USER]
SPRING_DATASOURCE_PASSWORD=[MYSQL_PASSWORD]
SPRING_DATASOURCE_DRIVER_CLASS_NAME=com.mysql.cj.jdbc.Driver
```

**Get MySQL credentials from:**
- Railway → MySQL Service → Connect → Copy JDBC URL

### Step 4: Redeploy

1. Railway will automatically redeploy after you push
2. OR click **"Redeploy"** button in Railway dashboard
3. Wait 5-10 minutes for build to complete

## ✅ What Should Happen

1. ✅ Build starts automatically
2. ✅ Maven downloads dependencies
3. ✅ Application compiles
4. ✅ JAR file is created
5. ✅ Application starts on port 8080
6. ✅ Railway assigns a public URL

## 🎯 After Successful Build

1. **Get your backend URL** from Railway dashboard
2. **Test it**: `https://your-url.up.railway.app/api/students`
3. **Use it in Vercel**: `https://your-url.up.railway.app/api`

---

**The build should now work! Check Railway logs for progress.** 🚀

