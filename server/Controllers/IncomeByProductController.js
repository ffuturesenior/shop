import incomeByProduct from '../objects/IncomeByProduct.js'

class IncomeByProductController{
    async create(req,res){
        try{
            const {date,productId,income}=req.body
            const isExists=await incomeByProduct.findOne({date:date,productId:productId})
            if(isExists){
                //console.log('exists')
                //console.log(isExists)
                const newObj=await incomeByProduct.findByIdAndUpdate(isExists._id,{...req.body,income:parseInt(isExists.income)+parseInt(req.body.income)},{new:true})
                return res.status(200).json(newObj)
            }else{
                console.log('create new')
                const IncomeByProduct=await incomeByProduct.create(req.body)
                res.status(200).json(IncomeByProduct)
            }
        }catch(e){
            console.log(e)
            res.status(500).json(e.message)
        }
    }

    async getAll(req,res){
        try{
            const IncomeByProduct=await incomeByProduct.find()
            return res.json(IncomeByProduct)
            console.log(res.data)
        }catch(e){
            res.status(500).json(e.message)
        }
    }
    async getOne(req,res){
        try{
            const {id}=req.params
            const IncomeByProduct=await incomeByProduct.findOne(id)
            return res.json(IncomeByProduct)
        }catch(e){
            res.status(500).json(e.message)
        }
    }
    async getByUserId(req,res){
        try{
            const {id}=req.params
            const IncomeByProduct=await incomeByProduct.find({productId:id})
            return res.json(IncomeByProduct)
            //console.log(res.data)
        }catch(e){
            res.status(500).json(e.message)
        }
    }
    async update(req,res){
        try{
            const IncomeByProduct=await incomeByProduct.findByIdAndUpdate(req.params.id,req.body,{new:true})
            return res.json(IncomeByProduct)
        }catch(e){
            res.status(500).json(e.message)
        }
    }
    async delete(req,res){
        try{
            const IncomeByProduct=await incomeByProduct.delete(req.params.id)
            return res.json(IncomeByProduct)

        }catch(e){
            res.status(500).json(e.message)
        }
    }
    async deleteByProductId(req,res){
        try{
            const IncomeByProduct=await incomeByProduct.deleteMany({productId:req.params.id})
            return res.json(IncomeByProduct)

        }catch(e){
            res.status(500).json(e.message)
        }
    }
}

export default new IncomeByProductController();
