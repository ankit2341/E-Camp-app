const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    username:String,
    email:String,
    password:String,
    avatar:String,
    role:String
});

const UserModel=mongoose.model("users",userSchema);

module.exports={
    UserModel
}