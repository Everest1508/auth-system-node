const mongoose = require("mongoose");

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:[true,"Email Must be provided"]
    },
    password:{
        type:String,
        required:[true,"Email Must be provided"]
    }
})

userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        return next();
    }

    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
    next();
});

module.exports = mongoose.model("User",userSchema);