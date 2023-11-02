const express = require("express");
const { getAllUser, createUser } = require("../controller/userController");
const router = express.Router();

// , getOneUser, updateUser, createUser, deleteUser

router.get('/', getAllUser);
router.post('/', createUser);
// router.get('/:id', getOneUser);
// router.patch('/:id', updateUser)
// router.delete('/:id', deleteUser)


module.exports = router;