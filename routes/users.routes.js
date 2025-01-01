import { Router } from "express";
import { loginUser, registerUser } from "../controllers/users.controller.js";


const userRouter = Router();

userRouter.post('/login', loginUser)
userRouter.post('/logout')
userRouter.post('/register', registerUser)
userRouter.get('/')
userRouter.get('/:id')

export default userRouter;