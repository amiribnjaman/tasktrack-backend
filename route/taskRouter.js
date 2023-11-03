const express = require("express");
const router = express.Router();
const {
  getAllTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controller/taskController");
const jsonwebtokenAuth = require("../middleware/authorization");

// Routes
router.get("/", jsonwebtokenAuth, getAllTask);
router.post("/", createTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
