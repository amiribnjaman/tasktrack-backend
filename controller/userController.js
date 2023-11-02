const User = require("../model/userModel");
const { v4: uuidv4 } = require("uuid");


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


// Login user
const loginUser = async (req, res) => {
    const {email, password} = req.body
    try{
        const getuser = await User.findOne({ email: email });
        if (getuser) {
            res.status(200).json(getuser);
        } else {
            res.status(401).json({message: 'Email or password is wrong'})
        }
    }catch(error){
        res.status(500).send(error.message)
    }

}


module.exports = { createUser, loginUser };
