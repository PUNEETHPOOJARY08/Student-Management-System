# 🎓 Student Management System

A full-stack Student Database Management System with a modern, attractive UI built with React, TypeScript, Tailwind CSS, Spring Boot, Hibernate, and MySQL.

## ✨ Features

- ✅ **Create Student** - Add new students with automatic ID generation
- ✅ **Update Student** - Edit existing student information
- ✅ **Delete Student** - Remove students from the database
- ✅ **View All Students** - Display all students in an attractive card-based layout
- ✅ **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- ✅ **Modern UI** - Beautiful gradient backgrounds and smooth animations

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool
- **Axios** - HTTP client

### Backend
- **Java 17** - Programming language
- **Spring Boot 3.2.0** - Application framework
- **Spring Data JPA** - Data persistence
- **Hibernate** - ORM framework
- **MySQL** - Relational database

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Java 17** or higher
- **Node.js 18** or higher
- **MySQL 8.0** or higher
- **Maven 3.6** or higher
- **Git**

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/PUNEETHPOOJARY08/Student-Management-System.git
cd Student-Management-System
```

### 2. Database Setup

1. Start your MySQL server
2. Create a database (or it will be created automatically):
   ```sql
   CREATE DATABASE IF NOT EXISTS student_management;
   ```
3. Update database credentials in `backend/src/main/resources/application.properties`:
   ```properties
   spring.datasource.username=your_username
   spring.datasource.password=your_password
   ```

### 3. Backend Setup

**Windows:**
```powershell
cd backend
.\mvnw.cmd spring-boot:run
```

**Linux/Mac:**
```bash
cd backend
./mvnw spring-boot:run
```

> **Note:** The Maven Wrapper (`mvnw`) is included, so you don't need to install Maven globally. It will download Maven automatically on first run.

The backend will run on `http://localhost:8080`

### 4. Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

The frontend will run on `http://localhost:3000`

## 📁 Project Structure

```
Student-Management-System/
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/studentmanagement/
│   │   │   │   ├── controller/
│   │   │   │   ├── model/
│   │   │   │   ├── repository/
│   │   │   │   ├── service/
│   │   │   │   └── StudentManagementSystemApplication.java
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   └── test/
│   └── pom.xml
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── types/
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   └── vite.config.ts
└── README.md
```

## 🔌 API Endpoints

### Base URL: `http://localhost:8080/api/students`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/students` | Get all students |
| GET | `/api/students/{id}` | Get student by ID |
| POST | `/api/students` | Create a new student |
| PUT | `/api/students/{id}` | Update a student |
| DELETE | `/api/students/{id}` | Delete a student |

### Example Request (Create Student)

```json
POST /api/students
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "phoneNumber": "+1234567890",
  "dateOfBirth": "2000-01-15",
  "address": "123 Main St, City, State",
  "course": "Computer Science"
}
```

## 🎨 UI Features

- **Gradient Backgrounds** - Beautiful color transitions
- **Card-based Layout** - Clean, organized student cards
- **Modal Forms** - Smooth form interactions
- **Responsive Grid** - Adapts to different screen sizes
- **Icon Integration** - SVG icons for better UX
- **Loading States** - Visual feedback during operations
- **Error Handling** - User-friendly error messages

## 🧪 Testing

### Backend Testing
```bash
cd backend
mvn test
```

### Frontend Testing
```bash
cd frontend
npm test
```

## 📦 Building for Production

### Backend
```bash
cd backend
mvn clean package
java -jar target/student-management-system-1.0.0.jar
```

### Frontend
```bash
cd frontend
npm run build
```

The production build will be in the `frontend/dist` directory.

## 🌐 Deployment

### Backend Deployment (Railway/Heroku/Render)

1. Create a new project on your deployment platform
2. Connect your GitHub repository
3. Set environment variables:
   - `SPRING_DATASOURCE_URL` - Your MySQL database URL
   - `SPRING_DATASOURCE_USERNAME` - Database username
   - `SPRING_DATASOURCE_PASSWORD` - Database password
4. Deploy!

### Frontend Deployment (Vercel/Netlify)

1. Create a new project on Vercel or Netlify
2. Connect your GitHub repository
3. Set build command: `npm run build`
4. Set output directory: `dist`
5. Set environment variable:
   - `VITE_API_URL` - Your backend API URL
6. Deploy!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Puneeth Poojary**

- GitHub: [@PUNEETHPOOJARY08](https://github.com/PUNEETHPOOJARY08)

## 🙏 Acknowledgments

- Spring Boot team for the amazing framework
- React team for the powerful UI library
- Tailwind CSS for the utility-first CSS framework

---

⭐ Star this repo if you find it helpful!

