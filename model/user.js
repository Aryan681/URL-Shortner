const mongoose = require("mongoose");
const { type } = require("os");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        },
       email: {
            type: String,
            require: true,
            unique :true ,
        },
        role:{
            type:String,
            required :true,
            default :"Normal",

        },
       password: {
            type: String,
            require: true,
           
        },
    },
    { timestamps: true });

const User = mongoose.model('user', userSchema);
module.exports = User;
