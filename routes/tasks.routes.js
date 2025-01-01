import { Router } from "express";
import { createTask, getAllTasks, updateTaskById } from "../controllers/tasks.controller.js";


const tasksRouter = Router();

tasksRouter.get('/', getAllTasks)
tasksRouter.get('/:id')
tasksRouter.post('/', createTask)
tasksRouter.put('/:id', updateTaskById)
tasksRouter.delete('/:id')

export default tasksRouter;