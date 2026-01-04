# Student Management System - Backend

Spring Boot REST API for managing student data.

## Setup

1. Install MySQL and create a database
2. Update `src/main/resources/application.properties` with your database credentials
3. Run the application:
   ```bash
   mvn spring-boot:run
   ```

## API Documentation

The API runs on `http://localhost:8080` by default.

### Endpoints

- `GET /api/students` - Get all students
- `GET /api/students/{id}` - Get student by ID
- `POST /api/students` - Create a new student
- `PUT /api/students/{id}` - Update a student
- `DELETE /api/students/{id}` - Delete a student

