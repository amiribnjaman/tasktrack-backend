const express = require("express");
const { getAllUser, getOneUser, updateUser, createUser, deleteUser } = require("../controller/user.controller");
const router = express.Router();


router.get('/', getAllUser);
router.get('/:id', getOneUser);
router.patch('/:id', updateUser)
router.delete('/:id', deleteUser)
router.post('/', createUser);


module.exports = router;