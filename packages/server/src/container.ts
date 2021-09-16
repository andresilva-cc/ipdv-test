import DependencyContainer from './lib/DependencyContainer';
import {
  SequelizeCostCenterRepository, SequelizeDepartmentRepository, SequelizePositionRepository,
  SequelizeUserRepository,
} from './app/Repositories/Implementation';
import {
  AuthService, CostCenterService, DepartmentService, PositionService, UserService,
} from './app/Services';

const container = new DependencyContainer();

// Repositories
container.register('CostCenterRepository', new SequelizeCostCenterRepository());
container.register('DepartmentRepository', new SequelizeDepartmentRepository());
container.register('PositionRepository', new SequelizePositionRepository());
container.register('UserRepository', new SequelizeUserRepository());

// Services
container.register('AuthService', new AuthService(
  container.get('UserRepository'),
));
container.register('CostCenterService', new CostCenterService(
  container.get('CostCenterRepository'),
));
container.register('DepartmentService', new DepartmentService(
  container.get('DepartmentRepository'),
));
container.register('PositionService', new PositionService(
  container.get('PositionRepository'),
));
container.register('UserService', new UserService(
  container.get('UserRepository'),
));

export default container;
