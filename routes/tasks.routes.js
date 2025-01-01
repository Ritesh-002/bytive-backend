import { Router } from "express";


const tasksRouter = Router();

tasksRouter.get('/')
tasksRouter.get('/:id')
tasksRouter.post('/')
tasksRouter.put('/:id')
tasksRouter.delete('/:id')

export default tasksRouter;