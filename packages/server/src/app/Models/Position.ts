import {
  Table, Column, Model, CreatedAt, UpdatedAt, Length, AllowNull,
} from 'sequelize-typescript';

@Table
class Position extends Model {
  @Length({ min: 3, max: 50 })
  @AllowNull(false)
  @Column
  name!: string;

  @CreatedAt
  createdAt!: Date;

  @UpdatedAt
  updatedAt!: Date;
}

export default Position;
