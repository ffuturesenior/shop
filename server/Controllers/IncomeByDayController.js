import IncomeByDay from '../objects/IncomeByDay.js'

class IncomeByDayController{
    async create(req,res){
        try{
            const {date,userId,income}=req.body
            const isExists=await IncomeByDay.findOne({date:date,userId:userId})
            if(isExists){
                console.log('exists')
                console.log(isExists)
                const newObj=await IncomeByDay.findByIdAndUpdate(isExists._id,{...req.body,income:parseInt(isExists.income)+parseInt(req.body.income)},{new:true})
                return res.status(200).json(newObj)
            }else{
                console.log('create new')
                const incomeByDay=await IncomeByDay.create(req.body)
                res.status(200).json(incomeByDay)
            }
            
        }catch(e){
            console.log(e)
            res.status(500).json(e.message)
        }
    }

    async getAll(req,res){
        try{
            const incomeByDay=await IncomeByDay.find()
            return res.json(incomeByDay)
            //console.log(res.data)
        }catch(e){
            res.status(500).json(e.message)
        }
    }
    async getByUserId(req,res){
        try{
            const {id}=req.params
            const incomeByDay=await IncomeByDay.find({userId:id})
            return res.json(incomeByDay)
            //console.log(res.data)
        }catch(e){
            res.status(500).json(e.message)
        }
    }
    async getOne(req,res){
        try{
            const {id}=req.params
            const incomeByDay=await IncomeByDay.findOne(id)
            return res.json(incomeByDay)
        }catch(e){
            res.status(500).json(e.message)
        }
    }
    async update(req,res){
        try{
            const incomeByDay=await IncomeByDay.findByIdAndUpdate(req.params.id,req.body,{new:true})
            return res.json(incomeByDay)
        }catch(e){
            res.status(500).json(e.message)
        }
    }
    async delete(req,res){
        try{
            const incomeByDay=await IncomeByDay.delete(req.params.id)
            return res.json(incomeByDay)

        }catch(e){
            res.status(500).json(e.message)
        }
    }
}

export default new IncomeByDayController();
