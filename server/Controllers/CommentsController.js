import Comments from '../objects/Comments.js'

class IncomeByDayController{
    async create(req,res){
        try{
            const comments=await Comments.create(req.body)
            res.status(200).json(comments)
        }catch(e){
            console.log(e)
            res.status(500).json(e.message)
        }
    }

    async getAll(req,res){
        try{
            const comments=await Comments.find()
            return res.json(comments)
            console.log(res.data)
        }catch(e){
            res.status(500).json(e.message)
        }
    }
    async getOne(req,res){
        try{
            const {id}=req.params
            const comments=await Comments.findOne(id)
            return res.json(comments)
        }catch(e){
            res.status(500).json(e.message)
        }
    }
    async getByPostId(req,res){
        try{
            const {id}=req.params
            const comments=await Comments.find({productId:id})
            return res.json(comments)
        }catch(e){
            res.status(500).json(e.message)
        }
    }
    async update(req,res){
        try{
            const comments=await Comments.findByIdAndUpdate(req.params.id,req.body,{new:true})
            return res.json(comments)
        }catch(e){
            res.status(500).json(e.message)
        }
    }
    async delete(req,res){
        try{
            const {userId,id}=req.params
            const comments=await Comments.findByIdAndDelete({productId:id,userId:userId})
            return res.json(comments)

        }catch(e){
            res.status(500).json(e.message)
        }
    }
    //deleteByProductId
    async deleteByProductId(req,res){
        try{
            const comments=await Comments.deleteMany({productId:req.params.id})
            return res.json(comments)

        }catch(e){
            res.status(500).json(e.message)
        }
    }
}

export default new IncomeByDayController();
