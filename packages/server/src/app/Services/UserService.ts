import { PasswordFacade } from '../Facades';
import { User } from '../Models';
import { UserRepository } from '../Repositories';

class UserService {
  constructor(
    private userRepository: UserRepository,
  ) {}

  public async all(): Promise<User[]> {
    return this.userRepository.all();
  }

  public async create(
    name: string, email: string, password: string, positionId: number, departmentId: number,
  ): Promise<User> {
    const user = await this.userRepository.create({
      name,
      email,
      password: PasswordFacade.hash(password),
      positionId,
      departmentId,
    });

    delete user.dataValues.password;

    return user;
  }

  public async update(id: number, data: any): Promise<User> {
    const updateData = data;

    if (updateData.password) {
      updateData.password = PasswordFacade.hash(updateData.password);
    }

    return this.userRepository.update(id, updateData);
  }

  public async delete(id: number): Promise<boolean> {
    return this.userRepository.delete(id);
  }
}

export default UserService;
