/* eslint-disable class-methods-use-this */

import SequelizeBaseRepository from './SequelizeBaseRepository';
import { Department } from '../../Models';
import DepartmentRepository from '../DepartmentRepository';

class SequelizeDepartmentRepository
  extends SequelizeBaseRepository<Department> implements DepartmentRepository {
  constructor() {
    super(Department);
  }
}

export default SequelizeDepartmentRepository;
