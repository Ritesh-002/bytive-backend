import { Router } from "express";
import tasksRouter from "./tasks.routes.js";
import userRouter from "./users.routes.js";

const appRouter = Router();

// app routes to access both user and tasks routes
appRouter.use('/tasks', tasksRouter);
appRouter.use('/users', userRouter);

export default appRouter