import { Router } from 'express';
import TaskController from '../controllers/TaskController';


const taskRouter = Router();
taskRouter.get('/favorite', TaskController.getFavorites);
taskRouter.get('/:color', TaskController.getByColor);
taskRouter.get('/', TaskController.getAll);
taskRouter.get('/:id', TaskController.get);
taskRouter.post('/create', TaskController.create);
taskRouter.put('/:id', TaskController.update);
taskRouter.delete('/:id', TaskController.delete);

export default taskRouter;