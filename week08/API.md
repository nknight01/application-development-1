# API Documentation

---

# Tasks Resource

## GET /tasks

### Description
Retrieve all tasks.

### Request Body
No request body required.

### Success Response

Status:

```http
200 OK
```

Body:

```json
{
  "data": [
    {
      "id": 1,
      "title": "Finish assignment"
    }
  ]
}
```

### Possible Errors

| Status Code | Description |
|---|---|
| 500 | Internal server error |

---

## GET /tasks/:id

### Description
Retrieve a single task by ID.

### Request Body
No request body required.

### Success Response

Status:

```http
200 OK
```

Body:

```json
{
  "id": 1,
  "title": "Finish assignment"
}
```

### Possible Errors

#### 404 Not Found

```json
{
  "error": {
    "code": "NOT_FOUND",
    "message": "Task not found"
  }
}
```

| Status Code | Description |
|---|---|
| 404 | Task not found |
| 500 | Internal server error |

---

## POST /tasks

### Description
Create a new task.

### Headers

```http
x-api-key: 12345
Content-Type: application/json
```

### Request Body

```json
{
  "title": "Complete project"
}
```

### Success Response

Status:

```http
201 Created
```

Body:

```json
{
  "id": 2,
  "title": "Complete project"
}
```

### Possible Errors

#### 400 Bad Request

```json
{
  "error": {
    "code": "INVALID_INPUT",
    "message": "Title is required"
  }
}
```

#### 401 Unauthorized

```json
{
  "error": {
    "code": "UNAUTHORIZED",
    "message": "Invalid or missing API key"
  }
}
```

| Status Code | Description |
|---|---|
| 400 | Missing required field |
| 401 | Invalid API key |
| 500 | Internal server error |

---

## PATCH /tasks/:id

### Description
Update an existing task.

### Headers

```http
x-api-key: 12345
Content-Type: application/json
```

### Request Body

```json
{
  "title": "Updated task title"
}
```

### Success Response

Status:

```http
200 OK
```

Body:

```json
{
  "id": 1,
  "title": "Updated task title"
}
```

### Possible Errors

#### 404 Not Found

```json
{
  "error": {
    "code": "NOT_FOUND",
    "message": "Task not found"
  }
}
```

#### 401 Unauthorized

```json
{
  "error": {
    "code": "UNAUTHORIZED",
    "message": "Invalid or missing API key"
  }
}
```

| Status Code | Description |
|---|---|
| 401 | Invalid API key |
| 404 | Task not found |
| 500 | Internal server error |

---

## DELETE /tasks/:id

### Description
Delete a task.

### Headers

```http
x-api-key: 12345
```

### Request Body
No request body required.

### Success Response

Status:

```http
200 OK
```

Body:

```json
{
  "message": "Task deleted successfully"
}
```

### Possible Errors

#### 404 Not Found

```json
{
  "error": {
    "code": "NOT_FOUND",
    "message": "Task not found"
  }
}
```

#### 401 Unauthorized

```json
{
  "error": {
    "code": "UNAUTHORIZED",
    "message": "Invalid or missing API key"
  }
}
```

| Status Code | Description |
|---|---|
| 401 | Invalid API key |
| 404 | Task not found |
| 500 | Internal server error |

---

# Users Resource

## GET /users

### Description
Retrieve all users.

### Request Body
No request body required.

### Success Response

Status:

```http
200 OK
```

Body:

```json
{
  "data": [
    {
      "id": 1,
      "name": "Nick"
    }
  ]
}
```

### Possible Errors

| Status Code | Description |
|---|---|
| 500 | Internal server error |

---

## GET /users/:id

### Description
Retrieve a single user by ID.

### Request Body
No request body required.

### Success Response

Status:

```http
200 OK
```

Body:

```json
{
  "id": 1,
  "name": "Nick"
}
```

### Possible Errors

#### 404 Not Found

```json
{
  "error": {
    "code": "NOT_FOUND",
    "message": "User not found"
  }
}
```

| Status Code | Description |
|---|---|
| 404 | User not found |
| 500 | Internal server error |

---

## POST /users

### Description
Create a new user.

### Headers

```http
x-api-key: 12345
Content-Type: application/json
```

### Request Body

```json
{
  "name": "Jordan"
}
```

### Success Response

Status:

```http
201 Created
```

Body:

```json
{
  "id": 2,
  "name": "Jordan"
}
```

### Possible Errors

#### 401 Unauthorized

```json
{
  "error": {
    "code": "UNAUTHORIZED",
    "message": "Invalid or missing API key"
  }
}
```

| Status Code | Description |
|---|---|
| 401 | Invalid API key |
| 500 | Internal server error |

---

## PATCH /users/:id

### Description
Update an existing user.

### Headers

```http
x-api-key: 12345
Content-Type: application/json
```

### Request Body

```json
{
  "name": "Updated Name"
}
```

### Success Response

Status:

```http
200 OK
```

Body:

```json
{
  "id": 1,
  "name": "Updated Name"
}
```

### Possible Errors

| Status Code | Description |
|---|---|
| 401 | Invalid API key |
| 404 | User not found |
| 500 | Internal server error |

---

## DELETE /users/:id

### Description
Delete a user.

### Headers

```http
x-api-key: 12345
```

### Request Body
No request body required.

### Success Response

Status:

```http
200 OK
```

Body:

```json
{
  "message": "User deleted successfully"
}
```

### Possible Errors

| Status Code | Description |
|---|---|
| 401 | Invalid API key |
| 404 | User not found |
| 500 | Internal server error |