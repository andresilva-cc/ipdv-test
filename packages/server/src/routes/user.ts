import { Express } from 'express';
import { TokenMiddleware } from '../middlewares/Auth';
import { UserController } from '../app/Controllers';

export default (application: Express) => {
  application.get('/users', TokenMiddleware, UserController.all);
  application.post('/users', TokenMiddleware, UserController.create);
  application.patch('/users/:id', TokenMiddleware, UserController.update);
  application.delete('/users/:id', TokenMiddleware, UserController.delete);
};
