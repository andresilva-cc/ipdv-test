import DependencyContainer from './lib/DependencyContainer';
import { SequelizeCostCenterRepository, SequelizeDepartmentRepository } from './app/Repositories/Implementation';
import { CostCenterService, DepartmentService } from './app/Services';

const container = new DependencyContainer();

container.register('CostCenterRepository', new SequelizeCostCenterRepository());
container.register('DepartmentRepository', new SequelizeDepartmentRepository());
container.register('CostCenterService', new CostCenterService(
  container.get('CostCenterRepository'),
));
container.register('DepartmentService', new DepartmentService(
  container.get('DepartmentRepository'),
));

export default container;
