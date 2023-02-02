import { Router } from "express";
import RequestController from "../Controllers/RequestController.js";

const RequestRouter=new Router();

RequestRouter.post('/requests',RequestController.create)
RequestRouter.get('/requests',RequestController.getAll)
RequestRouter.get('/requests/:id',RequestController.getOne)
RequestRouter.get('/requests/byProductId/:id',RequestController.getByProductId)
RequestRouter.get('/requests/byUserId/:id',RequestController.getByUserId)
RequestRouter.put('/requests',RequestController.update)
RequestRouter.delete('/requests/:id',RequestController.delete)


export default RequestRouter;