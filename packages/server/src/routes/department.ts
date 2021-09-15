import { Express } from 'express';
import { DepartmentController } from '../app/Controllers';

export default (application: Express) => {
  application.get('/departments', DepartmentController.all);
  application.post('/departments', DepartmentController.create);
  application.patch('/departments/:id', DepartmentController.update);
  application.delete('/departments/:id', DepartmentController.delete);
};
