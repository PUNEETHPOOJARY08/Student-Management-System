# Deployment Guide

This guide will help you deploy the Student Management System to production.

## Prerequisites

1. GitHub account
2. Deployment platform accounts (recommended):
   - **Backend**: Railway, Render, or Heroku
   - **Frontend**: Vercel or Netlify
   - **Database**: MySQL (Railway, PlanetScale, or AWS RDS)

## Step 1: Push to GitHub

```bash
# Add all files
git add .

# Commit
git commit -m "Initial commit: Student Management System"

# Add remote (replace with your GitHub username)
git remote add origin https://github.com/PUNEETHPOOJARY08/Student-Management-System.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 2: Deploy Backend (Railway/Render)

### Option A: Railway

1. Go to [railway.app](https://railway.app)
2. Create a new project
3. Connect your GitHub repository
4. Add MySQL database service
5. Set environment variables:
   - `SPRING_DATASOURCE_URL=jdbc:mysql://[host]:[port]/student_management`
   - `SPRING_DATASOURCE_USERNAME=[username]`
   - `SPRING_DATASOURCE_PASSWORD=[password]`
6. Deploy!

### Option B: Render

1. Go to [render.com](https://render.com)
2. Create a new Web Service
3. Connect your GitHub repository
4. Build command: `cd backend && mvn clean install && mvn spring-boot:run`
5. Add MySQL database
6. Set environment variables (same as Railway)
7. Deploy!

## Step 3: Deploy Frontend (Vercel/Netlify)

### Option A: Vercel

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Set root directory to `frontend`
4. Build command: `npm run build`
5. Output directory: `dist`
6. Add environment variable:
   - `VITE_API_URL=https://your-backend-url.com/api`
7. Deploy!

### Option B: Netlify

1. Go to [netlify.com](https://netlify.com)
2. Import your GitHub repository
3. Set base directory to `frontend`
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Add environment variable:
   - `VITE_API_URL=https://your-backend-url.com/api`
7. Deploy!

## Step 4: Update CORS Settings

After deployment, update the backend `application.properties` or environment variables to allow your frontend domain:

```properties
spring.web.cors.allowed-origins=https://your-frontend-url.vercel.app
```

Or in the controller, update:
```java
@CrossOrigin(origins = "https://your-frontend-url.vercel.app")
```

## Step 5: Test Your Deployment

1. Visit your frontend URL
2. Try creating a student
3. Verify all CRUD operations work
4. Check browser console for any errors

## Troubleshooting

### Backend Issues
- Check database connection strings
- Verify environment variables are set correctly
- Check application logs for errors

### Frontend Issues
- Verify `VITE_API_URL` points to your deployed backend
- Check browser console for CORS errors
- Ensure backend is running and accessible

## Quick Links

After deployment, your application will be available at:
- Frontend: [Your Vercel/Netlify URL]
- Backend API: [Your Railway/Render URL]/api/students

