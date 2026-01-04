# Running the Backend

## ✅ Good News: Maven Wrapper is Included!

You don't need to install Maven globally. The project includes a Maven Wrapper that will download Maven automatically.

## 🚀 Running the Backend

### Windows (PowerShell/CMD)

```powershell
cd backend
.\mvnw.cmd spring-boot:run
```

### Linux/Mac

```bash
cd backend
./mvnw spring-boot:run
```

## 📝 First Time Setup

1. **Update MySQL credentials** in `src/main/resources/application.properties`:
   ```properties
   spring.datasource.username=root
   spring.datasource.password=your_password
   ```

2. **Start MySQL server** (if not already running)

3. **Run the application**:
   ```powershell
   .\mvnw.cmd spring-boot:run
   ```

The first time you run it, the Maven Wrapper will download Maven automatically (this may take a minute).

## 🎯 What Happens

1. Maven Wrapper downloads Maven (first time only)
2. Maven downloads dependencies
3. Spring Boot starts on `http://localhost:8080`
4. Database is created automatically (if it doesn't exist)

## ✅ Verify It's Working

Open your browser and go to:
- API: http://localhost:8080/api/students

You should see an empty array `[]` if no students are added yet.

## 🔧 Other Useful Commands

**Build the project:**
```powershell
.\mvnw.cmd clean install
```

**Run tests:**
```powershell
.\mvnw.cmd test
```

**Package for production:**
```powershell
.\mvnw.cmd clean package
```

