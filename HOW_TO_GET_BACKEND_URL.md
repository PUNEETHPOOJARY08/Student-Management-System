# 🔗 How to Get Your Backend URL from Railway

## Step-by-Step Guide

### Step 1: After Deploying to Railway

1. Go to: **https://railway.app**
2. Log in to your account
3. Click on your project: **Student-Management-System**

### Step 2: Find Your Backend Service

You'll see your services listed. Look for:
- **Backend service** (the one running your Spring Boot app)
- It might be named something like "web" or "backend" or "student-management-system"

### Step 3: Get the URL

**Option A: From the Service Card**
1. Click on your **backend service**
2. Look at the top of the page
3. You'll see a section called **"Domains"** or **"Networking"**
4. There will be a URL like: `https://your-app-name.up.railway.app`
5. **Copy this URL** - this is your backend URL!

**Option B: From Settings**
1. Click on your backend service
2. Go to **"Settings"** tab
3. Scroll down to **"Networking"** section
4. You'll see **"Public Domain"** or **"Generate Domain"**
5. Click **"Generate Domain"** if you don't see one
6. Copy the domain shown (e.g., `https://your-app.up.railway.app`)

**Option C: From Deployments**
1. Click on your backend service
2. Go to **"Deployments"** tab
3. Click on the latest deployment
4. Look for **"Public URL"** or **"Domain"**
5. Copy the URL shown

### Step 4: Test Your Backend URL

Once you have the URL, test it:
1. Open a new browser tab
2. Go to: `https://your-backend-url.up.railway.app/api/students`
3. You should see: `[]` (empty array) - this means it's working!

### Step 5: Use It for Frontend

When deploying to Vercel, use this format:
```
https://your-backend-url.up.railway.app/api
```

**Example:**
- If your Railway backend URL is: `https://student-management-production.up.railway.app`
- Then your `VITE_API_URL` should be: `https://student-management-production.up.railway.app/api`

---

## 📸 Visual Guide

### What You'll See in Railway:

```
┌─────────────────────────────────────┐
│  Student-Management-System          │
├─────────────────────────────────────┤
│  [Backend Service]                  │
│  Status: ✅ Running                  │
│  Domain: your-app.up.railway.app    │ ← THIS IS YOUR BACKEND URL
│  [MySQL Database]                   │
└─────────────────────────────────────┘
```

---

## 🎯 Quick Checklist

- [ ] Logged into Railway
- [ ] Found your backend service
- [ ] Generated/copied the public domain
- [ ] Tested the URL in browser
- [ ] Got the `/api/students` endpoint working
- [ ] Ready to use it in Vercel deployment

---

## ⚠️ Important Notes

1. **First Time**: Railway might take 2-5 minutes to generate the domain
2. **Format**: The URL will always end with `.up.railway.app`
3. **HTTPS**: Railway provides HTTPS automatically
4. **No Port**: Don't add `:8080` - Railway handles ports automatically

---

## 🆘 Troubleshooting

**No domain shown?**
- Click "Generate Domain" button
- Wait 1-2 minutes for it to appear
- Refresh the page

**URL not working?**
- Check if the service is deployed (green status)
- Check the logs for errors
- Make sure the build completed successfully

**Can't find the service?**
- Make sure you deployed the backend
- Check if it's in a different project
- Look for services with "Java" or "Spring Boot" icon

---

## ✅ Once You Have the URL

1. **Copy it** (e.g., `https://student-management.up.railway.app`)
2. **Add `/api`** to the end for Vercel: `https://student-management.up.railway.app/api`
3. **Use it** as `VITE_API_URL` in Vercel deployment

---

**Your backend URL format will be:**
```
https://[random-name].up.railway.app
```

**For frontend, use:**
```
https://[random-name].up.railway.app/api
```

