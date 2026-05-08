const express = require("express");
const router = express.Router();

const tasksController = require("../controllers/tasksController");

const validateTask = require("../middleware/validateTask");
const apiKeyAuth = require("../middleware/apiKeyAuth");

// GET all tasks
router.get("/", tasksController.getTasks);

// GET one task
router.get("/:id", tasksController.getTaskById);

router.post("/", apiKeyAuth, validateTask, tasksController.createTask);

router.patch("/:id", apiKeyAuth, tasksController.updateTask);

router.delete("/:id", apiKeyAuth, tasksController.deleteTask);

module.exports = router;