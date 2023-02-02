import mongoose from "mongoose";


const Comments=new mongoose.Schema({
    text:{type:String,required:true},
    userId:{type:String,required:true},
    productId:{type:String,required:true},
    
})


export default mongoose.model('Comments',Comments)
