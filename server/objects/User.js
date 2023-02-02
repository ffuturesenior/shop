import mongoose from "mongoose";


const User=new mongoose.Schema({
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    email:{type:String,required:true},
    caption:{type:String,required:false},
    password:{type:String,required:false},
})


export default mongoose.model('User',User)


