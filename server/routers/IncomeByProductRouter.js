import { Router } from "express";
import IncomeByProductController from "../Controllers/IncomeByProductController.js";

const IncomeByProductRouter=new Router();

IncomeByProductRouter.post('/incomebyProduct',IncomeByProductController.create)
IncomeByProductRouter.get('/incomebyProduct',IncomeByProductController.getAll)
IncomeByProductRouter.get('/incomebyProduct/:id',IncomeByProductController.getOne)
IncomeByProductRouter.get('/incomebyProduct/ByProductId/:id',IncomeByProductController.getByUserId)
IncomeByProductRouter.put('/incomebyProduct',IncomeByProductController.update)
IncomeByProductRouter.delete('/incomebyProduct/:id',IncomeByProductController.delete)
IncomeByProductRouter.delete('/incomebyProduct/byProductId/:id',IncomeByProductController.deleteByProductId)

export default IncomeByProductRouter;