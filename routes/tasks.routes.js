import { Router } from "express";
import { createTask, deleteTaskById, getAllTasks, getTaskById, updateTaskById } from "../controllers/tasks.controller.js";
import { isLoggedIn } from "../middlewares/auth.middleware.js";


const tasksRouter = Router();

tasksRouter.get('/', isLoggedIn, getAllTasks)
tasksRouter.get('/:id', getTaskById)
tasksRouter.post('/', createTask)
tasksRouter.put('/:id', updateTaskById)
tasksRouter.delete('/:id', deleteTaskById)

export default tasksRouter;