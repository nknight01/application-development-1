
# Final Project — Backend API

## Project Description
This project is a backend API built with Express and MySQL.  
It demonstrates how to build a full-stack backend system using real-world practices including authentication, authorization, database integration, and CRUD operations.

The API manages users, projects, and tasks with role-based and ownership-based access control.

---

## Features
- Session-based authentication (login/logout)
- Role-based authorization (admin vs user)
- Ownership-based access control
- MySQL database integration
- Full CRUD operations for tasks/projects
- Structured MVC architecture (routes, controllers, middleware)

---

## Project Structure

```
final-project/
│
├── routes/
├── controllers/
├── middleware/
├── screenshots/
├── db.js
├── server.js
└── README.md
```

---

## Setup Instructions

### 1. Install dependencies
Run the following command in the project folder:

```
npm install
```

Or manually install required packages:


npm install express express-session mysql2




### 2. Set up MySQL database

Open MySQL Workbench and run:

```sql
CREATE DATABASE final_project_db;


Then switch to the database:

```sql
USE final_project_db;


Create tables:

```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255),
  password VARCHAR(255),
  role VARCHAR(50)
);

CREATE TABLE projects (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  text VARCHAR(255),
  project_id INT,
  FOREIGN KEY (project_id) REFERENCES projects(id)
);




## How to Run the Server

Start the backend server with:


node server.js


The server will run on:


http://localhost:3000
```

---

## API Endpoints

### Authentication

| Method | Endpoint   | Description        |
|--------|-----------|--------------------|
| POST   | /login    | Log in user        |
| POST   | /logout   | Log out user       |

---

### User Routes

| Method | Endpoint   | Description        |
|--------|-----------|--------------------|
| GET    | /profile  | Get logged-in user |

---

### Admin Routes

| Method | Endpoint   | Description        |
|--------|-----------|--------------------|
| GET    | /admin    | Admin-only access  |

---

### Tasks (CRUD)

| Method | Endpoint       | Description           |
|--------|---------------|-----------------------|
| GET    | /tasks/:id    | Get single task       |
| GET    | /tasks        | Get all tasks         |
| POST   | /tasks        | Create new task       |
| PUT    | /tasks/:id    | Update task           |
| DELETE | /tasks/:id    | Delete task           |

---

## Authentication Rules

- Users must log in to access protected routes
- Admin users can access all data
- Regular users can only access their own data



## Error Format

All errors return JSON in this format:

```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable message"
  }
}



## Status Codes Used

- 200 → Success
- 400 → Bad Request
- 401 → Not Authenticated
- 403 → Forbidden
- 404 → Not Found

