import mongoose from "mongoose";


const IncomeByDay=new mongoose.Schema({
    income:{type:String,required:true},
    date:{type:String,required:true},
    userId:{type:String,required:true}
})


export default mongoose.model('IncomeByDay',IncomeByDay)
