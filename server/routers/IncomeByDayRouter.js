import { Router } from "express";
import IncomeByDayController from "../Controllers/IncomeByDayController.js";

const IncomeByDayRouter=new Router();

IncomeByDayRouter.post('/incomebyday',IncomeByDayController.create)
IncomeByDayRouter.get('/incomebyday',IncomeByDayController.getAll)
IncomeByDayRouter.get('/incomebyday/:id',IncomeByDayController.getOne)
IncomeByDayRouter.get('/incomebyday/byUserId/:id',IncomeByDayController.getByUserId)
IncomeByDayRouter.put('/incomebyday',IncomeByDayController.update)
IncomeByDayRouter.delete('/incomebyday/:id',IncomeByDayController.delete)


export default IncomeByDayRouter;