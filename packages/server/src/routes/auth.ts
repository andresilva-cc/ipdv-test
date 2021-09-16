import { Express } from 'express';
import { TokenMiddleware } from '../middlewares/Auth';
import { AuthController } from '../app/Controllers';

export default (application: Express) => {
  application.post('/auth/login', AuthController.login);
  application.post('/auth/refresh', AuthController.refreshToken);
  application.get('/auth/user', TokenMiddleware, AuthController.getUser);
};
