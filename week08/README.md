# Task Management API

## 1. Project Overview

This project is a RESTful API built with Express.js for managing tasks and users. The API allows clients to create, retrieve, update, and delete resources while demonstrating professional backend structure, middleware usage, validation, authentication, pagination, and error handling.

The API is designed for developers, students, or applications that need a simple task management backend system.

### Core Resources

- Tasks
- Users

---

# 2. Setup Instructions

## Requirements

- Node.js
- npm

## Install Dependencies

```bash
npm install
```

## Start the Server

```bash
node server.js
```

OR

```bash
npm start
```

## Development Mode

```bash
npm run dev
```

## Environment Variables

No environment variables are required for this project.

---

# 3. API Overview

| Method | Endpoint | Description |
|---|---|---|
| GET | /tasks | Retrieve all tasks |
| GET | /tasks/:id | Retrieve a single task |
| POST | /tasks | Create a new task |
| PATCH | /tasks/:id | Update an existing task |
| DELETE | /tasks/:id | Delete a task |
| GET | /users | Retrieve all users |
| GET | /users/:id | Retrieve a single user |
| POST | /users | Create a new user |
| PATCH | /users/:id | Update an existing user |
| DELETE | /users/:id | Delete a user |

---

# 4. Example Requests

## Successful POST Request

### Request

POST /tasks

Headers:

```http
x-api-key: 12345
Content-Type: application/json
```

Body:

```json
{
  "title": "Finish backend assignment"
}
```

### Response

Status:

```http
201 Created
```

Body:

```json
{
  "id": 1,
  "title": "Finish backend assignment"
}
```

---

## Validation Error Example

### Request

POST /tasks

Headers:

```http
x-api-key: 12345
Content-Type: application/json
```

Body:

```json
{}
```

### Response

Status:

```http
400 Bad Request
```

Body:

```json
{
  "error": {
    "code": "INVALID_INPUT",
    "message": "Title is required"
  }
}
```

---

## Unauthorized Request Example

### Request

POST /tasks

Headers:

```http
Content-Type: application/json
```

Body:

```json
{
  "title": "Unauthorized request"
}
```

### Response

Status:

```http
401 Unauthorized
```

Body:

```json
{
  "error": {
    "code": "UNAUTHORIZED",
    "message": "Invalid or missing API key"
  }
}
```