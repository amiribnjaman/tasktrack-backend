const express = require("express");
const router = express.Router();
const { getAllTask, createTask } = require("../controller/taskController");

// Routes
router.get("/", getAllTask);
router.post("/", createTask);

module.exports = router;
