import express from 'express'
import cors from 'cors'
import fileUpload from 'express-fileupload';
import mongoose from 'mongoose';
import UserRouter from './routers/UserRouter.js';
import ProductRouter from './routers/ProductRouter.js'
import RequestRouter from './routers/ReqeuestRouter.js';
import IncomeByDayRouter from './routers/IncomeByDayRouter.js';
import CommentRouter from './routers/CommentRouter.js';
import IncomeByProductRouter from './routers/IncomeByProductRouter.js';
import BasketPostRouter from './routers/BasketPostRouter.js';
import dotenv from 'dotenv/config'
//import cors from './middleware/cors.middleware.js';
const PORT=process.env.PORT||5000;
const DB_URL=process.env.DB


const app=express();
app.use(cors({
    methods:"*"
}))
app.use(express.json())
app.use(fileUpload({}))
app.use(express.static('static'))
app.use('/aboba',UserRouter)
app.use('/aboba',ProductRouter)
app.use('/aboba',RequestRouter)
app.use('/aboba',IncomeByDayRouter)
app.use('/aboba',CommentRouter)
app.use('/aboba',IncomeByProductRouter)
app.use('/aboba',BasketPostRouter)


async function StartApp(){
    try{
        await mongoose.connect(DB_URL,{useUnifiedTopology:true,useNewUrlParser:true})
        app.listen(PORT,()=>{console.log("working")})
    }catch(e){
        console.log(e)
    }
}
StartApp()

app.get('/',(req,res)=>{
    res.status(200).json(req.body)

})
