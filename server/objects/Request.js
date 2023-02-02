import mongoose from "mongoose";


const Request=new mongoose.Schema({
    productId:{type:String,required:true},
    userId:{type:String,required:true},
    price:{type:String,required:true},
    count:{type:String,required:true},
    sellerId:{type:String,required:true},
})


export default mongoose.model('Request',Request)


