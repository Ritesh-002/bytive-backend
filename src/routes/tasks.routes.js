import { Router } from "express";
import { createTask, deleteTaskById, getAllTasks, getTaskById, updateTaskById } from "../controllers/tasks.controller.js";
import { isLoggedIn } from "../middlewares/auth.middleware.js";


const tasksRouter = Router();

tasksRouter.get('/', isLoggedIn, getAllTasks)
tasksRouter.get('/:id', isLoggedIn, getTaskById)
tasksRouter.post('/', isLoggedIn, createTask)
tasksRouter.put('/:id', isLoggedIn, updateTaskById)
tasksRouter.delete('/:id', isLoggedIn, deleteTaskById)

export default tasksRouter;