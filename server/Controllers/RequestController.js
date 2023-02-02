import Request from '../objects/Request.js'

class RequestController{
    async create(req,res){
        try{
            const request=await Request.create(req.body)
            res.status(200).json(request)
        }catch(e){
            console.log(e)
            res.status(500).json(e.message)
        }
    }

    async getAll(req,res){
        try{
            const request=await Request.find()
            return res.json(request)
            console.log(res.data)
        }catch(e){
            res.status(500).json(e.message)
        }
    }
    async getOne(req,res){
        try{
            const {id}=req.params
            const request=await Request.findOne(id)
            return res.json(request)
        }catch(e){
            res.status(500).json(e.message)
        }
    }
    async getByUserId(req,res){
        try{
            const {id}=req.params
            const request=await Request.find({sellerId:id})
            return res.json(request)
        }catch(e){
            res.status(500).json(e.message)
        }
    }
    async getByProductId(req,res){
        try{
            const {id}=req.params
            const request=await Request.find({productId:id})
            return res.json(request)
        }catch(e){
            res.status(500).json(e.message)
        }
    }
    async update(req,res){
        try{
            const updatedRequest=await Request.findByIdAndUpdate(req.params.id,req.body,{new:true})
            return res.json(updatedRequest)
        }catch(e){
            res.status(500).json(e.message)
        }
    }
    async delete(req,res){
        try{
            const {id}=req.params
            console.log(id)
            const request=await Request.findByIdAndDelete(id)
            return res.json(request)

        }catch(e){
            res.status(500).json(e.message)
        }
    }
}

export default new RequestController();
