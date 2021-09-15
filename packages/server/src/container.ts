import DependencyContainer from './lib/DependencyContainer';
import { SequelizeCostCenterRepository, SequelizeDepartmentRepository, SequelizePositionRepository } from './app/Repositories/Implementation';
import { CostCenterService, DepartmentService, PositionService } from './app/Services';

const container = new DependencyContainer();

container.register('CostCenterRepository', new SequelizeCostCenterRepository());
container.register('DepartmentRepository', new SequelizeDepartmentRepository());
container.register('PositionRepository', new SequelizePositionRepository());
container.register('CostCenterService', new CostCenterService(
  container.get('CostCenterRepository'),
));
container.register('DepartmentService', new DepartmentService(
  container.get('DepartmentRepository'),
));
container.register('PositionService', new PositionService(
  container.get('PositionRepository'),
));

export default container;
