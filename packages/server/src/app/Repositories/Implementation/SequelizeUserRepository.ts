/* eslint-disable class-methods-use-this */

import SequelizeBaseRepository from './SequelizeBaseRepository';
import { User } from '../../Models';
import UserRepository from '../UserRepository';

class SequelizeUserRepository extends SequelizeBaseRepository<User> implements UserRepository {
  constructor() {
    super(User);
  }
}

export default SequelizeUserRepository;
