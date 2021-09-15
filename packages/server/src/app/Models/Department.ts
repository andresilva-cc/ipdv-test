import {
  Table, Column, Model, CreatedAt, UpdatedAt, Length, AllowNull, ForeignKey, BelongsTo,
  DefaultScope,
} from 'sequelize-typescript';
import CostCenter from './CostCenter';

@DefaultScope(() => ({
  include: [CostCenter],
}))
@Table
class Department extends Model {
  @Length({ min: 3, max: 50 })
  @AllowNull(false)
  @Column
  name!: string;

  @AllowNull(false)
  @ForeignKey(() => CostCenter)
  @Column
  costCenterId!: number;

  @BelongsTo(() => CostCenter)
  costCenter!: CostCenter;

  @CreatedAt
  createdAt!: Date;

  @UpdatedAt
  updatedAt!: Date;
}

export default Department;
