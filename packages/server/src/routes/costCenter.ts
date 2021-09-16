import { Express } from 'express';
import { TokenMiddleware } from '../middlewares/Auth';
import { CostCenterController } from '../app/Controllers';

export default (application: Express) => {
  application.get('/cost-centers', TokenMiddleware, CostCenterController.all);
  application.post('/cost-centers', TokenMiddleware, CostCenterController.create);
  application.patch('/cost-centers/:id', TokenMiddleware, CostCenterController.update);
  application.delete('/cost-centers/:id', TokenMiddleware, CostCenterController.delete);
};
