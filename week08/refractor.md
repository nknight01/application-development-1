# Refactoring and Code Quality Improvements

---

# Improvement 1 — Moved Validation Logic into Middleware

## What Was Changed

Validation logic for task creation was moved from the controller into a reusable middleware file called validateTask.js.

---

## Why It Improves Quality

This improves separation of concerns by keeping controllers focused on business logic instead of input validation.

The middleware can also be reused across multiple routes if needed.

---

## Before vs After

### Before

The controller handled validation directly before creating a task.

This made the controller larger and mixed validation logic with application logic.

### After

The validateTask middleware checks input before the controller executes.

If validation fails, the request stops immediately and returns a 400 response.

The controller only handles task creation.

---

# Improvement 2 — Improved Variable Naming

## What Was Changed

Generic variable names such as data or item were renamed to clearer names like task, user, and updatedTask.

---

## Why It Improves Quality

Clear variable names improve readability and make the code easier to understand and maintain.

Developers can understand the purpose of variables more quickly.

---

## Before vs After

### Before

Variables used unclear names that did not describe their purpose well.

Example:

const item = tasks[index];

### After

Variables now clearly describe the resource they represent.

Example:

const task = tasks[index];

---

# Improvement 3 — Added Centralized Error Handling

## What Was Changed

A centralized error handling middleware was added using errorHandler.js.

---

## Why It Improves Quality

Centralized error handling creates consistent JSON error responses across the entire API.

It also reduces duplicated error response code inside controllers.

---

## Before vs After

### Before

Each controller manually handled errors and returned responses separately.

This caused repeated code and inconsistent formatting.

### After

Controllers can now pass errors to the centralized middleware.

The middleware handles formatting and response structure consistently.

All errors now follow the same JSON format.

---

# Improvement 4 — Reduced Nested Conditionals

## What Was Changed

Some controller functions were simplified by returning early when errors occurred instead of nesting multiple if statements.

---

## Why It Improves Quality

Reducing nested conditionals improves readability and makes the code easier to follow.

Early returns also make debugging simpler.

---

## Before vs After

### Before

Functions used multiple nested if statements which made logic harder to read.

### After

Functions now return immediately when an error condition occurs, keeping the main logic cleaner and easier to understand.