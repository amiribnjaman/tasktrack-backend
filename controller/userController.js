const User = require("../model/userModel");
const { v4: uuidv4 } = require("uuid");

const getAllUser = async (req, res) => {
  try {
    // const users = await User.find();
      res.status(200).json({
        message: 'get all user'
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Create OR Signup a user
const createUser = async (req, res) => {
    const { name, email, password } = req.body
    try{
        const newUser = new User({
            id: uuidv4(),
            name,
            email,
            password
        })
        await newUser.save();
        res.status(201).json(newUser);
    } catch(error) {
        res.status(500).send(error.message)
    }
}

// const getOneUser = async (req, res) => {
//     try{
//         const oneUser = await User.findOne({id: req.params.id})
//         res.status(200).json(oneUser)
//     }catch(error){
//         res.status(500).send(error.message)
//     }

// }



// const updateUser = async (req, res) => {
//     try{
//         const user = await User.findOne({id: req.params.id})
//         user.name = req.body.name
//         user.age = +(req.body.age)
//         await user.save()
//         res.status(200).json(user)
//     }catch(error){
//         res.status(500).send(error.message)
//     }
// }

// const deleteUser = async (req, res) => {
//     try{
//         await User.deleteOne({id: req.params.id})
//         res.status(200).json({
//             message: 'User deleted'
//         })
//     }catch(error){
//         res.status(500).send(error.message)
//     }
// }

module.exports = { getAllUser, createUser };
