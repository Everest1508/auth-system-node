const user = require("../models/users");

const getAllUsers = async(req,res) => {
    const data =await user.find({})
    res.status(200).json(data);
};

const getAllUsersTest = async(req,res) => {
    res.status(200).json({msg:"im user test"});
};

module.exports = {getAllUsers,getAllUsersTest}