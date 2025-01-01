import { Router } from "express";


const userRouter = Router();

userRouter.post('/login')
userRouter.post('/logout')
userRouter.post('/register')
userRouter.get('/')
userRouter.get('/:id')

export default userRouter;