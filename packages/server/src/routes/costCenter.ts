import { Express } from 'express';
import { CostCenterController } from '../app/Controllers';

export default (application: Express) => {
  application.get('/cost-centers', CostCenterController.all);
  application.post('/cost-centers', CostCenterController.create);
  application.patch('/cost-centers/:id', CostCenterController.update);
  application.delete('/cost-centers/:id', CostCenterController.delete);
};
