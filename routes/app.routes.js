import { Router } from "express";
import tasksRouter from "./tasks.routes.js";

const appRouter = Router();

// app routes to access both user and tasks routes
appRouter.use('/tasks', tasksRouter);

export default appRouter