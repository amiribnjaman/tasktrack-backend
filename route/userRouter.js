const express = require("express");
const { createUser, loginUser } = require("../controller/userController");
const router = express.Router();


// Router
router.post("/signup", createUser);
router.post("/login", loginUser);

module.exports = router;
