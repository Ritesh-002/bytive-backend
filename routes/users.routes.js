import { Router } from "express";
import { loginUser, logoutUser, registerUser } from "../controllers/users.controller.js";


const userRouter = Router();

userRouter.post('/login', loginUser)
userRouter.post('/logout', logoutUser)
userRouter.post('/register', registerUser)
userRouter.get('/')
userRouter.get('/:id')

export default userRouter;