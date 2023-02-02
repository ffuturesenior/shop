import mongoose from "mongoose";


const BasketPost=new mongoose.Schema({
    userId:{type:String,required:true},
    productId:{type:String,required:true},
    
})


export default mongoose.model('BasketPost',BasketPost)
