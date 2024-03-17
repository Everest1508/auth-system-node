const connectDB = require("./db/connect");
const User = require("./models/users");
const userDB = require("./users.json");

const start = async()=>{
    try{
        await connectDB();
        await User.create(userDB);
        console.log("Created")
    }
    catch(error){
        console.log(error);
    }
}

start();