import mongoose from "mongoose";


const Product=new mongoose.Schema({
    name:{type:String,required:true,unique:false},
    brand:{type:String,required:true,unique:false},
    type:{type:String,required:true,unique:false},
    price:{type:String,required:true,unique:false},
    textarea:{type:String,required:true,unique:false},
    userId:{type:String,required:true,unique:false}
})


export default mongoose.model('Product',Product)
