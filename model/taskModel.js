const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  id: {
    type: String,
    require: true,
  },
  creatorEmail: {
    type: String,
    require: true,
  },
  taskTitle: {
    type: String,
    require: true,
  },
  completion: {
    type: String,
    require: true,
  },
  teamLeader: {
    type: String,
    require: true,
  },
  teamMemberNum: {
    type: String,
    require: true,
  },
  teamMembers: {
    type: [String | Array],
    require: false,
  },
  createOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Task", taskSchema);
