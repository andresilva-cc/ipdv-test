import { Express } from 'express';
import { PositionController } from '../app/Controllers';
import { TokenMiddleware } from '../middlewares/Auth';

export default (application: Express) => {
  application.get('/positions', TokenMiddleware, PositionController.all);
  application.post('/positions', TokenMiddleware, PositionController.create);
  application.patch('/positions/:id', TokenMiddleware, PositionController.update);
  application.delete('/positions/:id', TokenMiddleware, PositionController.delete);
};
