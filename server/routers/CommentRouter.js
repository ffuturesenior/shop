import { Router } from "express";
import CommentsController from "../Controllers/CommentsController.js";

const CommentRouter=new Router();

CommentRouter.post('/comment',CommentsController.create)
CommentRouter.get('/comment',CommentsController.getAll)
CommentRouter.get('/comment/:id',CommentsController.getOne)
CommentRouter.get('/comment/getByPostId/:id',CommentsController.getByPostId)
CommentRouter.put('/comment',CommentsController.update)
CommentRouter.delete('/comment/:id&:userId',CommentsController.delete)
CommentRouter.delete('/comment/byProductId/:id',CommentsController.deleteByProductId)

export default CommentRouter;