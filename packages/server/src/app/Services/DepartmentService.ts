import { Department } from '../Models';
import { DepartmentRepository } from '../Repositories';

class DepartmentService {
  constructor(
    private departmentRepository: DepartmentRepository,
  ) {}

  public async all(): Promise<Department[]> {
    return this.departmentRepository.all();
  }

  public async create(name: string, costCenterId: number): Promise<Department> {
    return this.departmentRepository.create({
      name,
      costCenterId,
    });
  }

  public async update(id: number, data: any): Promise<Department> {
    return this.departmentRepository.update(id, data);
  }

  public async delete(id: number): Promise<boolean> {
    return this.departmentRepository.delete(id);
  }
}

export default DepartmentService;
