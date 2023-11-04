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
const jsonwebtokenAuth = require("../middleware/authorization");

// Routes
router.get("/search",jsonwebtokenAuth, search);
router.get("/:id", jsonwebtokenAuth, getOneTask);
router.get("/", jsonwebtokenAuth, getAllTask);
router.post("/", jsonwebtokenAuth, createTask);
router.patch("/:id", jsonwebtokenAuth, updateTask);
router.delete("/:id", jsonwebtokenAuth, deleteTask);


module.exports = router;
