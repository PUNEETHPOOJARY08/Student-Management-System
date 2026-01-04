# ✅ Maven Issue - SOLVED!

## Problem
You got the error: `mvn : The term 'mvn' is not recognized`

## Solution
I've added **Maven Wrapper** to your project! You don't need to install Maven globally.

## 🎯 How to Run Now

### Option 1: Set JAVA_HOME (Recommended)

1. **Find your Java installation:**
   ```powershell
   Get-Command java | Select-Object -ExpandProperty Source
   ```
   This shows: `C:\Program Files\Common Files\Oracle\Java\javapath\java.exe`

2. **Find the JDK home** (usually one of these):
   - `C:\Program Files\Java\jdk-24`
   - `C:\Program Files\Java\jdk-24.0.1`
   - Check: `C:\Program Files\Java\` folder

3. **Set JAVA_HOME temporarily** (for this session):
   ```powershell
   $env:JAVA_HOME="C:\Program Files\Java\jdk-24"
   ```

4. **Run the backend:**
   ```powershell
   cd backend
   .\mvnw.cmd spring-boot:run
   ```

### Option 2: Set JAVA_HOME Permanently

1. Press `Win + X` → **System** → **Advanced system settings**
2. Click **Environment Variables**
3. Under **System Variables**, click **New**:
   - Name: `JAVA_HOME`
   - Value: `C:\Program Files\Java\jdk-24` (your actual JDK path)
4. Click **OK** on all dialogs
5. **Restart PowerShell**
6. Run: `.\mvnw.cmd spring-boot:run`

## 📝 What Changed

✅ Added `mvnw.cmd` (Maven Wrapper for Windows)
✅ Added `mvnw` (Maven Wrapper for Linux/Mac)
✅ Added `.mvn/wrapper/` directory with Maven configuration
✅ Updated documentation

## 🚀 Quick Test

Try this now:
```powershell
cd backend
$env:JAVA_HOME="C:\Program Files\Java\jdk-24"  # Adjust path if needed
.\mvnw.cmd --version
```

If it works, you'll see Maven version info!

## 💡 What is Maven Wrapper?

Maven Wrapper (`mvnw`) is a script that:
- Downloads Maven automatically (first time only)
- Uses the correct Maven version for this project
- No need to install Maven globally!

## ✅ Next Steps

1. Set JAVA_HOME (see above)
2. Update MySQL credentials in `backend/src/main/resources/application.properties`
3. Run: `.\mvnw.cmd spring-boot:run`
4. Open new terminal for frontend: `cd frontend && npm install && npm run dev`

---

**Need help?** Check `QUICK_START.md` for detailed instructions!

