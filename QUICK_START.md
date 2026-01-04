# 🚀 Quick Start Guide

## ✅ You're Almost Ready!

Java is installed, but you need to set `JAVA_HOME`. Here's how:

## Step 1: Set JAVA_HOME (One-Time Setup)

### Find Your Java Installation

Run this command to find where Java is installed:
```powershell
where java
```

### Set JAVA_HOME Environment Variable

1. **Open System Properties:**
   - Press `Win + R`
   - Type `sysdm.cpl` and press Enter
   - Click **Advanced** tab
   - Click **Environment Variables**

2. **Add JAVA_HOME:**
   - Under **System Variables**, click **New**
   - Variable name: `JAVA_HOME`
   - Variable value: `C:\Program Files\Java\jdk-24` (or your Java path)
   - Click **OK**

3. **Update Path:**
   - Find **Path** in System Variables
   - Click **Edit**
   - Add: `%JAVA_HOME%\bin`
   - Click **OK** on all dialogs

4. **Restart PowerShell** (important!)

### Verify JAVA_HOME

Open a **new** PowerShell window and run:
```powershell
echo $env:JAVA_HOME
```

## Step 2: Update MySQL Credentials

Edit `backend/src/main/resources/application.properties`:
```properties
spring.datasource.username=root
spring.datasource.password=your_mysql_password
```

## Step 3: Start MySQL Server

Make sure MySQL is running on your system.

## Step 4: Run the Backend

```powershell
cd backend
.\mvnw.cmd spring-boot:run
```

The first time will download Maven automatically (takes 1-2 minutes).

## Step 5: Run the Frontend

Open a **new** terminal:

```powershell
cd frontend
npm install
npm run dev
```

## Step 6: Access the Application

- Frontend: http://localhost:3000
- Backend API: http://localhost:8080/api/students

## 🎉 You're Done!

The application should now be running!

## ⚠️ Troubleshooting

**If JAVA_HOME still doesn't work:**
- Make sure you restarted PowerShell after setting JAVA_HOME
- Check that the path is correct (no trailing backslash)
- Try using the full path in the command:
  ```powershell
  $env:JAVA_HOME="C:\Program Files\Java\jdk-24"
  .\mvnw.cmd spring-boot:run
  ```

