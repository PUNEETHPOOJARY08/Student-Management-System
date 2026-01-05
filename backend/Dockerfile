# Multi-stage build for Spring Boot application
# This Dockerfile is in the backend/ directory
# Railway will build from the repository root

# Stage 1: Build stage
FROM maven:3.9-eclipse-temurin-17 AS build
WORKDIR /app

# Copy pom.xml and download dependencies (from backend folder)
COPY backend/pom.xml ./pom.xml
RUN mvn dependency:go-offline -B

# Copy source code and build
COPY backend/src ./src
RUN mvn clean package -DskipTests

# Stage 2: Runtime stage
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app

# Copy the JAR from build stage
COPY --from=build /app/target/*.jar app.jar

# Expose port (Railway will set PORT env variable)
EXPOSE 8080

# Run the application
ENTRYPOINT ["sh", "-c", "java -jar app.jar"]
