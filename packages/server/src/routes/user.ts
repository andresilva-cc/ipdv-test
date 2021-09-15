import { Express } from 'express';
import { UserController } from '../app/Controllers';

export default (application: Express) => {
  application.get('/users', UserController.all);
  application.post('/users', UserController.create);
  application.patch('/users/:id', UserController.update);
  application.delete('/users/:id', UserController.delete);
};
