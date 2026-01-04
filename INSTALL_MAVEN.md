# Installing Maven on Windows

## Option 1: Install Maven Manually

### Step 1: Download Maven
1. Go to https://maven.apache.org/download.cgi
2. Download `apache-maven-3.9.x-bin.zip` (latest version)
3. Extract it to a folder like `C:\Program Files\Apache\maven`

### Step 2: Set Environment Variables
1. Open **System Properties** → **Environment Variables**
2. Under **System Variables**, click **New**:
   - Variable name: `MAVEN_HOME`
   - Variable value: `C:\Program Files\Apache\maven` (your Maven path)
3. Edit the **Path** variable:
   - Add: `%MAVEN_HOME%\bin`
4. Click **OK** on all dialogs

### Step 3: Verify Installation
Open a **new** PowerShell window and run:
```powershell
mvn -version
```

## Option 2: Install via Chocolatey (Easier)

If you have Chocolatey installed:
```powershell
choco install maven
```

## Option 3: Use Maven Wrapper (No Installation Needed)

I can add a Maven Wrapper to your project so you don't need to install Maven globally. Would you like me to do that?

## Option 4: Use an IDE

You can also run the Spring Boot application directly from:
- **IntelliJ IDEA** (File → Open → Select backend folder)
- **Eclipse** (Import as Maven project)
- **VS Code** (with Java extensions)

## Quick Check

After installation, verify:
```powershell
mvn -version
```

You should see something like:
```
Apache Maven 3.9.x
Maven home: C:\Program Files\Apache\maven
Java version: 17.x.x
```

