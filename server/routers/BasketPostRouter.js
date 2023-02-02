import { Router } from "express";
import BasketPostController from "../Controllers/BasketPostController.js";

const BasketPostRouter=new Router();

BasketPostRouter.post('/BasketPost',BasketPostController.create)
BasketPostRouter.get('/BasketPost',BasketPostController.getAll)
BasketPostRouter.get('/BasketPost/:id',BasketPostController.getOne)
BasketPostRouter.get('/BasketPost/getByUserId/:id',BasketPostController.getByUserId)
BasketPostRouter.get('/BasketPost/checkPost/:userId&:productId',BasketPostController.isProductSaved)
BasketPostRouter.put('/BasketPost',BasketPostController.update)
BasketPostRouter.delete('/BasketPost/:id',BasketPostController.delete)
BasketPostRouter.delete('/BasketPost/deleteBasketPost/:productId&:userId',BasketPostController.deleteByAllData)


export default BasketPostRouter;