# Quick Setup Instructions

## 🚀 Quick Start

### 1. Database Setup

1. Install MySQL if not already installed
2. Start MySQL service
3. The database will be created automatically when you run the backend

### 2. Backend Setup

```bash
cd backend
mvn clean install
mvn spring-boot:run
```

**Note**: Update `src/main/resources/application.properties` with your MySQL credentials:
- Username: `root` (or your MySQL username)
- Password: `root` (or your MySQL password)

### 3. Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

### 4. Access the Application

- Frontend: http://localhost:3000
- Backend API: http://localhost:8080/api/students

## 📤 Push to GitHub

```bash
# If not already done
git remote add origin https://github.com/PUNEETHPOOJARY08/Student-Management-System.git
git branch -M main
git push -u origin main
```

## 🌐 Deployment

See `DEPLOYMENT.md` for detailed deployment instructions.

### Quick Deploy Options:

**Backend**: Railway, Render, or Heroku
**Frontend**: Vercel or Netlify
**Database**: Railway MySQL, PlanetScale, or AWS RDS

## ✅ Features

- ✅ Create students with automatic ID
- ✅ Update student information
- ✅ Delete students
- ✅ View all students
- ✅ Beautiful, responsive UI
- ✅ Full CRUD operations

