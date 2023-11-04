const Task = require("../model/taskModel");
const { v4: uuidv4 } = require("uuid");

// Get One task
const getOneTask = async (req, res) => {
  // const email = req.query.email;
  const { email } = req.decoded;
  console.log(email)
  const id = req.params.id
  console.log(id)
  try {
    const tasks = await Task.findOne({ id });
    if (tasks) {
      res.status(200).json(tasks);
    } else {
      res.status(400).json({ message: "something went wrong" });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Get all task
const getAllTask = async (req, res) => {
  // const email = req.query.email;
  const { email } = req.decoded;
  try {
    const tasks = await Task.find({ creatorEmail: email });
    if (tasks) {
      res.status(200).json(tasks);
    } else {
      res.status(400).json({ message: "something went wrong" });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Create a new task api
const createTask = async (req, res) => {
  const creatorEmail = req.decoded.email;

  const { taskTitle, completion, teamLeader, teamMemberNum, teamMembers } =
    req.body;
  try {
    const newTask = new Task({
      id: uuidv4(),
      creatorEmail,
      taskTitle,
      completion,
      teamLeader,
      teamMemberNum,
      teamMembers: ["Amir", "Tamim", "Zahid", "Jack"],
    });
    const data = await newTask.save();
    if (data) {
      res.send({ status: 201, message: "created a new task", newTask });
    } else {
      res.send({ statu: 400, message: "something went wrong" });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Update a task
const updateTask = async (req, res) => {
  const id = req.params.id;
  const creatorEmail = req.decoded.email;
  console.log(id, creatorEmail, req.body);

  const {taskTitle,teamLeader, completion, teamMemberNum } = req.body;
  try {
    const update = {
      taskTitle,
      completion,
      teamLeader,
      teamMemberNum,
    };
    const updateTask = await Task.updateOne({ id, creatorEmail }, update, {
      returnOriginal: false,
    });
    // const data = await updateTask.save();
    if (updateTask) {
      res.send({ status: 201, message: "created a new task", updateTask });
    } else {
      res.send({ status: 400, message: "something went wrong" });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Delete a task
const deleteTask = async (req, res) => {
  const id = req.params.id;
  try {
    await Task.deleteOne({ id: id });
    res.send({ status: 204, message: "Deleted successfully" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getOneTask,getAllTask, createTask, updateTask, deleteTask };

// jamirrdd@mail.com
