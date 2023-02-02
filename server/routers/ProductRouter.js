import { Router } from "express";
import ProductController from "../Controllers/ProductController.js";

const ProductRouter=new Router();

ProductRouter.post('/products',ProductController.create)
ProductRouter.get('/products/',ProductController.getAll)
ProductRouter.get('/products/:id',ProductController.getOne)
ProductRouter.get('/product/byUserId/:id',ProductController.getByUserId)
ProductRouter.get('/product/byCategories/:type&:brand',ProductController.getByCategories)
ProductRouter.put('/products',ProductController.update)
ProductRouter.delete('/products/:id',ProductController.delete)


export default ProductRouter;