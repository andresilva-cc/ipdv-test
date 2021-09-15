import { CostCenter } from '../Models';
import { CostCenterRepository } from '../Repositories';

class CostCenterService {
  constructor(
    private costCenterRepository: CostCenterRepository,
  ) {}

  public async all(): Promise<CostCenter[]> {
    return this.costCenterRepository.all();
  }

  public async create(name: string): Promise<CostCenter> {
    return this.costCenterRepository.create({
      name,
    });
  }

  public async update(id: number, data: any): Promise<CostCenter> {
    return this.costCenterRepository.update(id, data);
  }
}

export default CostCenterService;
