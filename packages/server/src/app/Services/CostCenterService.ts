import { CostCenter } from '../Models';
import { CostCenterRepository } from '../Repositories';

class CostCenterService {
  constructor(
    private costCenterRepository: CostCenterRepository,
  ) {}

  public async all(): Promise<CostCenter[]> {
    return this.costCenterRepository.all();
  }
}

export default CostCenterService;
