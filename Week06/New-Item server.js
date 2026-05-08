const express = require("express");
const app = express();

app.use(express.json());

// ====================================
// In-Memory Storage
// ====================================

let users = [
  { id: 1, name: "John Doe" }
];

let tasks = [
  { id: 1, title: "Finish assignment", completed: false }
];

// Simple increment counters
let nextUserId = 2;
let nextTaskId = 2;

// ====================================
// USERS ROUTES
// ====================================

// GET all users
app.get("/users", (req, res) => {
  res.status(200).json(users);
});

// GET one user
app.get("/users/:id", (req, res) => {
  const user = users.find(u => u.id == req.params.id);

  if (!user) {
    return res.status(404).json({
      error: "User not found"
    });
  }

  res.json(user);
});

// CREATE user
app.post("/users", (req, res) => {
  const newUser = {
    id: nextUserId++,
    name: req.body.name
  };

  users.push(newUser);

  res.status(201).json(newUser);
});

// UPDATE user
app.patch("/users/:id", (req, res) => {
  const user = users.find(u => u.id == req.params.id);

  if (!user) {
    return res.status(404).json({
      error: "User not found"
    });
  }

  if (req.body.name !== undefined) {
    user.name = req.body.name;
  }

  res.json(user);
});

// DELETE user
app.delete("/users/:id", (req, res) => {
  const userExists = users.some(u => u.id == req.params.id);

  if (!userExists) {
    return res.status(404).json({
      error: "User not found"
    });
  }

  users = users.filter(u => u.id != req.params.id);

  res.status(204).send();
});

// ====================================
// TASKS ROUTES
// ====================================

// GET all tasks
app.get("/tasks", (req, res) => {
  res.status(200).json(tasks);
});

// GET one task
app.get("/tasks/:id", (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);

  if (!task) {
    return res.status(404).json({
      error: "Task not found"
    });
  }

  res.json(task);
});

// CREATE task
app.post("/tasks", (req, res) => {
  const newTask = {
    id: nextTaskId++,
    title: req.body.title,
    completed: false
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
});

// UPDATE task
app.patch("/tasks/:id", (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);

  if (!task) {
    return res.status(404).json({
      error: "Task not found"
    });
  }

  if (req.body.title !== undefined) {
    task.title = req.body.title;
  }

  if (req.body.completed !== undefined) {
    task.completed = req.body.completed;
  }

  res.json(task);
});

// DELETE task
app.delete("/tasks/:id", (req, res) => {
  const taskExists = tasks.some(t => t.id == req.params.id);

  if (!taskExists) {
    return res.status(404).json({
      error: "Task not found"
    });
  }

  tasks = tasks.filter(t => t.id != req.params.id);

  res.status(204).send();
});

// ====================================
// SERVER START
// ====================================

app.listen(3000, () => {
  console.log("Server running on port 3000");
});