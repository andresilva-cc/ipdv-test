import { Express } from 'express';
import { PositionController } from '../app/Controllers';

export default (application: Express) => {
  application.get('/positions', PositionController.all);
  application.post('/positions', PositionController.create);
  application.patch('/positions/:id', PositionController.update);
  application.delete('/positions/:id', PositionController.delete);
};
