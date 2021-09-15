/* eslint-disable class-methods-use-this */

import SequelizeBaseRepository from './SequelizeBaseRepository';
import { Position } from '../../Models';
import PositionRepository from '../PositionRepository';

class SequelizePositionRepository
  extends SequelizeBaseRepository<Position> implements PositionRepository {
  constructor() {
    super(Position);
  }
}

export default SequelizePositionRepository;
