const express = require("express");
const router = express.Router();

const tasksController = require("../controllers/tasksController");
const validateTask = require("../middleware/validateTask");

// GET all tasks
router.get("/", tasksController.getTasks);

// GET one task
router.get("/:id", tasksController.getTaskById);

// POST new task
router.post("/", validateTask, tasksController.createTask);

// PATCH task
router.patch("/:id", tasksController.updateTask);

// DELETE task
router.delete("/:id", tasksController.deleteTask);

module.exports = router;