import mongoose from "mongoose";


const IncomeByProduct=new mongoose.Schema({
    income:{type:String,required:true},
    date:{type:String,required:true},
    productId:{type:String,required:true}
})


export default mongoose.model('IncomeByProduct',IncomeByProduct)
