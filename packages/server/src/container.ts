import DependencyContainer from './lib/DependencyContainer';
import { SequelizeCostCenterRepository } from './app/Repositories/Implementation';
import { CostCenterService } from './app/Services';

const container = new DependencyContainer();

container.register('CostCenterRepository', new SequelizeCostCenterRepository());
container.register('CostCenterService', new CostCenterService(
  container.get('CostCenterRepository'),
));

export default container;
