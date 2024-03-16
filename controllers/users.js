const getAllUsers = async(req,res) => {
    res.status(200).json({msg:"im user"});
};

const getAllUsersTest = async(req,res) => {
    res.status(200).json({msg:"im user test"});
};

module.exports = {getAllUsers,getAllUsersTest}