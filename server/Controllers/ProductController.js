import Product from '../objects/product.js'

class ProductController{
    async create(req,res){
        try{
            const post=await Product.create(req.body)
            res.status(200).json(post)
        }catch(e){
            console.log(e)
            res.status(500).json(e.message)
        }
    }

    async getAll(req,res){
        try{
            const posts=await Product.find()

            return res.json(posts.slice(0,50))
            //console.log(res.data)
        }catch(e){
            res.status(500).json(e.message)
        }
    }
    async getByCategories(req,res){
        try{
            const {type,brand}=req.params
            const posts= await Product.find({type:brand,brand:type})
            //const slicedPosts=posts.slice(length-1,length+2)
            //console.log(slicedPosts)
            return res.status(200).json(posts)
            //console.log(res.data)
        }catch(e){
            res.status(500).json(e.message)
        }
    }
    async getOne(req,res){
        try{
            const {id}=req.params
            const post=await Product.findOne({_id:id})
            return res.json(post)
        }catch(e){
            res.status(500).json(e.message)
        }
    }
    async getByUserId(req,res){
        try{
            const {id}=req.params
            const post=await Product.find({userId:id})
            return res.json(post)
        }catch(e){
            res.status(500).json(e.message)
        }
    }
    async update(req,res){
        try{
            const updatedPost=await Product.findByIdAndUpdate(req.params.id,req.body,{new:true})
            return res.json(updatedPost)
        }catch(e){
            res.status(500).json(e.message)
        }
    }
    async delete(req,res){
        try{
            const post=await Product.findByIdAndDelete(req.params.id)
            return res.json(post)

        }catch(e){
            res.status(500).json(e.message)
        }
    }
}

export default new ProductController();
