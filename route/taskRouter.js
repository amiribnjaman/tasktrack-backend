const express = require("express");
const router = express.Router();
const {
  getAllTask,
  createTask,
  updateTask,
} = require("../controller/taskController");

// Routes
router.get("/", getAllTask);
router.post("/", createTask);
router.patch("/", updateTask);

module.exports = router;
