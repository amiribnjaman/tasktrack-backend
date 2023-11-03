const Task = require("../model/taskModel");
const { v4: uuidv4 } = require("uuid");

// Get all task
const getAllTask = async (req, res) => {
  const email = req.query.email;
  try {
    // {creatorEmail: email}
    const tasks = await Task.find({});
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
      res.status(200).json({ message: "created a new task", newTask });
    } else {
      res.status(400).json({ message: "something went wrong" });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Update a task
const updateTask = async (req, res) => {
  const id = req.params.id;
  const { creatorEmail, completion, teamMemberNum } = req.body;
  try {
    const update = {
      creatorEmail,
      completion,
      teamMemberNum,
    };
    const updateTask = await Task.updateOne({ id }, update, {
      returnOriginal: false,
    });
    // const data = await updateTask.save();
    if (updateTask) {
      res.status(201).json({ message: "created a new task", updateTask });
    } else {
      res.status(400).json({ message: "something went wrong" });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Delete a task
const deleteTask = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
      await Task.deleteOne({ id });
      res.status(200).json({message: 'Deleted successfully'})
  } catch (error) {
      res.status(500).send(error.message);
  }
};

module.exports = { getAllTask, createTask, updateTask, deleteTask };

// jamirrdd@mail.com
