const mongoose = require("mongoose");

const uri = "mongodb+srv://TheRiteshMahale:9rrhdh22z8bq61UB@nodeapi.emwths6.mongodb.net/NodeAPI?retryWrites=true&w=majority&appName=NodeAPI";

const connectDB = () => {
    return mongoose.connect(
        uri,
    );
};

module.exports = connectDB;
