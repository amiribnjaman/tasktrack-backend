const Task = require("../model/taskModel");
const { v4: uuidv4 } = require("uuid");

// Get all task
const getAllTask = async (req, res) => {
    const email = req.query.mail
  try {
    const tasks = await Task.find({ creatorEmail: email });
    if (tasks) {
      res.status(201).json(tasks);
    } else {
      res.status(400).json({ message: "something went wrong" });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Create a new task
const createTask = async (req, res) => {
  const {
    creatorEmail,
    taskTitle,
    completion,
    teamLeader,
    teamMemberNum,
    teamMembers,
  } = req.body;
  try {
    const newTask = new Task({
      id: uuidv4(),
      creatorEmail,
      taskTitle,
      completion,
      teamLeader,
      teamMemberNum,
      teamMembers,
    });
    const data = await newTask.save();
    if (data) {
      res.status(201).json({ message: "created a new task", newTask });
    } else {
      res.status(400).json({ message: "something went wrong" });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Create a new task
const updateTask = (req, res) => {};

// Delete a new task
const deleteTask = (req, res) => {};

module.exports = { getAllTask, createTask };

