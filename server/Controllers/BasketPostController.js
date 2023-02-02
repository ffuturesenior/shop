import BasketPost from '../objects/basketPost.js'

class BasketPostController{
    async create(req,res){
        try{
            const basketPost=await BasketPost.create(req.body)
            res.status(200).json(basketPost)
        }catch(e){
            console.log(e)
            res.status(500).json(e.message)
        }
    }
    async getAll(req,res){
        try{
            const basketPost=await BasketPost.find()
            return res.json(basketPost)
            console.log(res.data)
        }catch(e){
            res.status(500).json(e.message)
        }
    }
    async getOne(req,res){
        try{
            const {id}=req.params
            const basketPost=await BasketPost.findOne(id)
            return res.json(basketPost)
        }catch(e){
            res.status(500).json(e.message)
        }
    }
    async getByUserId(req,res){
        try{
            const {id}=req.params
            const basketPost=await BasketPost.find({userId:id})
            return res.json(basketPost)
        }catch(e){
            res.status(500).json(e.message)
        }
    }
    async isProductSaved(req,res){
        try{
            const {productId,userId}=req.params
            const basketPost=await BasketPost.findOne({userId:userId,productId:productId})
            return res.json(basketPost)
        }catch(e){
            res.status(500).json(e.message)
        }
    }
    async update(req,res){
        try{
            const basketPost=await BasketPost.findByIdAndUpdate(req.params.id,req.body,{new:true})
            return res.json(basketPost)
        }catch(e){
            res.status(500).json(e.message)
        }
    }
    async delete(req,res){
        try{
            const basketPost=await BasketPost.findByIdAndDelete(req.params.id)
            return res.json(basketPost)

        }catch(e){
            res.status(500).json(e.message)
        }
    }
    async deleteByAllData(req,res){
        try{
            const {productId,userId}=req.params
            const basketPost=await BasketPost.deleteOne({userId:userId,productId:productId})
            return res.json(basketPost)
        }catch(e){
            res.status(500).json(e.message)
        }
    }
}

export default new BasketPostController();
