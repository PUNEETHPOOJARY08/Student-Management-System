# ⚡ Quick Guide: Get Backend URL

## 🎯 Where to Find It

### In Railway Dashboard:

1. **Go to**: https://railway.app/dashboard
2. **Click** your project: `Student-Management-System`
3. **Click** your backend service (the one with Spring Boot icon)
4. **Look for**: 
   - **"Public Domain"** section, OR
   - **"Networking"** tab, OR
   - **"Settings"** → **"Generate Domain"** button

### The URL Will Look Like:
```
https://student-management-production.up.railway.app
```

### For Frontend (Vercel), Use:
```
https://student-management-production.up.railway.app/api
```

---

## 📍 Exact Location in Railway:

```
Railway Dashboard
  └── Your Project
      └── Backend Service
          ├── Overview Tab → "Public Domain" section
          ├── Settings Tab → "Networking" → "Generate Domain"
          └── Deployments Tab → Latest deployment → "Public URL"
```

---

## ✅ Quick Test

Once you have the URL, test it:
```
https://your-url.up.railway.app/api/students
```

Should return: `[]` (empty array = working!)

---

**That's it! Copy that URL and use it in Vercel!** 🚀

