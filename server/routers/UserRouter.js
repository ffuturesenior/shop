import { Router } from "express";
import UserController from "../Controllers/UserController.js";
import { check,validationResult } from "express-validator";

const UserRouter=new Router();

UserRouter.post('/users/registrate',
                [
                    check('email','uncorrectemail').isEmail(),
                    check('password','uncorrect password(min:4,max:15)').isLength({min:4,max:15})
                ]
                ,UserController.registrate)
UserRouter.post('/users/login',UserController.login)
UserRouter.get('/users',UserController.getAll)
UserRouter.get('/users/:id',UserController.getOne)
UserRouter.put('/users/update/:id',UserController.update)
UserRouter.delete('/users/:id',UserController.delete)
UserRouter.get('/users/auth/:id',UserController.rehost)


export default UserRouter;