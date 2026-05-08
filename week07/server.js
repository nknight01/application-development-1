const express = require("express");

const logger = require("./middleware/logger");
const timing = require("./middleware/timing");
const errorHandler = require("./middleware/errorHandler");

const usersRoutes = require("./routes/usersRoutes");
const tasksRoutes = require("./routes/tasksRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(logger);
app.use(timing);

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

// Error Handler MUST BE LAST
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});