const mongoose = require("mongoose");

const uri = "";

const connectDB = () => {
    console.log("heheheheh");

    return mongoose.connect(
        uri,
        {
            useNewUrlParser: true,        
            useUnifiedTopology: true,
        }
    );
};

module.exports = connectDB;
