const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    createOn : {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("User", userSchema)