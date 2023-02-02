import User from '../objects/User.js'
import bcrypt from 'bcryptjs'
import { validationResult } from 'express-validator'
import  jwt from 'jsonwebtoken'

class UserController{
    async  registrate (req,res) {
        console.log('registrate')
        try{
            const errors=validationResult(req)
            if(!errors.isEmpty()){
                return res.status(400).json({message:`reg error,errors:${errors}`}) 
            }
            const {email,password}=req.body
            const emailChek=await User.findOne({email})
            if(emailChek){
                return res.status(400).json({message:`username:${email} already email`})
            }
            const hashPswd= await bcrypt.hash(password,8)
            const user=await User.create({...req.body,password:hashPswd})
            return res.status(200).json({message:"user created"})
        }catch(e){
            console.log(e)
        }
    }
    async  login(req,res){
        console.log('login')
        try{
            const {email,password}=req.body
            const user =await User.findOne({email})
            const emailFind=await User.findOne({email})
            if(!emailFind){
                return res.status(400).json({message:`can not find:${email}`})
            }
            const pswdCheck=  bcrypt.compareSync(password,user.password)
            if(!pswdCheck){
                return res.status(400).json({message:"invalid pswd"})
            }
            return res.status(200).json(user)
        }catch(e){
            console.log(e)
        }
    }
    async  getAll(req,res){
        console.log('getAll')
        try{
            const users=await User.find()
            return res.status(200).json(users)
        }catch(e){
            console.log(e)
        }
    }
    async  getOne(req,res){
        console.log('getOne')
        try{
            const {id}=req.params
            
            if(!id){
              return res.status(400).json({message:"invalid id"})
            }
            const user=await User.findById(id)
            return res.status(200).json(user)
        }catch(e){
            console.log(e)
        }
    }
    async  update(req,res){
        console.log('update')
        try{
            const {id}=req.params
            const user=req.body
            if(!id){
               return res.status(400).json({message:"id undef"})
            }
            const updatedUser=await User.findByIdAndUpdate(id,{...req.body},{new:true})
            return res.status(200).json(updatedUser)                /* {...user,avatar:fileName}*/
        }catch(e){
            res.status(500).json(`${e}`)
        }
    }
    async  delete(req,res){
        console.log('delete')
        try{
            const {id}=req.params
            if(!id){
                res.status(400).json({message:"id undef"})
            }
            const user=await User.findByIdAndDelete(id)
            return res.json(user)
        }catch(e){
            res.status(500).json(e)
        }
    }

    async  rehost(req,res){
        console.log('rehost')
        try{
            const {id}=req.params
            console.log(id)
            if(!id){
                res.status(400).json({message:"id undef"})
            }
            const user = await User.findById(id)
            return res.status(200).json(user)
        }catch(e){
            console.log(e)
        }
    }
}

export default new UserController();
