const express = require("express");
const router = express.Router();
const {
  getAllTask,
  createTask,
  updateTask,
  deleteTask,
  getOneTask,
  search,
} = require("../controller/taskController");

// Routes
router.get("/search", search);
router.get("/:id", getOneTask);
router.get("/", getAllTask);
router.post("/", createTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);


module.exports = router;
