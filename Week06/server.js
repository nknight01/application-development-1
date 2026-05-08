const express = require("express");
const logger = require("./middleware/logger");

const usersRoutes = require("./routes/tasksRoutes");
const tasksRoutes = require("./routes/tasksRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.use("/users", usersRoutes);
app.use("/tasks", tasksRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    error: {
      code: "NOT_FOUND",
      message: "Route not found"
    }
  });
});

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});