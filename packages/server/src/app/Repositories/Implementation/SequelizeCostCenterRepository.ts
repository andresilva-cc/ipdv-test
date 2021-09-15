/* eslint-disable class-methods-use-this */

import SequelizeBaseRepository from './SequelizeBaseRepository';
import { CostCenter } from '../../Models';
import CostCenterRepository from '../CostCenterRepository';

class SequelizeCostCenterRepository
  extends SequelizeBaseRepository<CostCenter> implements CostCenterRepository {
  constructor() {
    super(CostCenter);
  }
}

export default SequelizeCostCenterRepository;
