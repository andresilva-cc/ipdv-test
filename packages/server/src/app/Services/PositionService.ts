import { Position } from '../Models';
import { PositionRepository } from '../Repositories';

class PositionService {
  constructor(
    private positionRepository: PositionRepository,
  ) {}

  public async all(): Promise<Position[]> {
    return this.positionRepository.all();
  }

  public async create(name: string): Promise<Position> {
    return this.positionRepository.create({
      name,
    });
  }

  public async update(id: number, data: any): Promise<Position> {
    return this.positionRepository.update(id, data);
  }

  public async delete(id: number): Promise<boolean> {
    return this.positionRepository.delete(id);
  }
}

export default PositionService;
