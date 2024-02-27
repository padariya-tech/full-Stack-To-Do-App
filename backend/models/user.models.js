const mongoose = require("mongoose")
const UserSchema = mongoose.Schema({
    Fullname:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]

},{timestamps:true})






const User = mongoose.model("User",UserSchema)
module.exports={
    User
}