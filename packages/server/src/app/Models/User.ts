import {
  Table, Column, Model, CreatedAt, UpdatedAt, Length, AllowNull, ForeignKey, BelongsTo,
  DefaultScope, IsEmail, Unique,
} from 'sequelize-typescript';
import Position from './Position';
import Department from './Department';

@DefaultScope(() => ({
  attributes: ['id', 'name', 'email', 'positionId', 'departmentId', 'createdAt', 'updatedAt'],
  include: [Position, Department],
}))
@Table
class User extends Model {
  @Length({ min: 3, max: 255 })
  @AllowNull(false)
  @Column
  name!: string;

  @IsEmail
  @Length({ min: 3, max: 254 })
  @Unique
  @AllowNull(false)
  @Column
  email!: string;

  @Length({ max: 60 })
  @AllowNull(false)
  @Column
  password!: string;

  @AllowNull(false)
  @ForeignKey(() => Position)
  @Column
  positionId!: number;

  @BelongsTo(() => Position)
  position!: Position;

  @AllowNull(false)
  @ForeignKey(() => Department)
  @Column
  departmentId!: number;

  @BelongsTo(() => Department)
  department!: Department;

  @CreatedAt
  createdAt!: Date;

  @UpdatedAt
  updatedAt!: Date;
}

export default User;
