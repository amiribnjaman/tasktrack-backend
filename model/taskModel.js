const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  id: {
    type: String,
    require: true,
    },
    creatorEmail: {
        type: String,
        require: true
    },
    title: {
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
        type: String | Array,
        require: true,
    }
});

module.exports = mongoose.model("Task", taskSchema);
