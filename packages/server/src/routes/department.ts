import { Express } from 'express';
import { TokenMiddleware } from '../middlewares/Auth';
import { DepartmentController } from '../app/Controllers';

export default (application: Express) => {
  application.get('/departments', TokenMiddleware, DepartmentController.all);
  application.post('/departments', TokenMiddleware, DepartmentController.create);
  application.patch('/departments/:id', TokenMiddleware, DepartmentController.update);
  application.delete('/departments/:id', TokenMiddleware, DepartmentController.delete);
};
