// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Sequelize = require('sequelize');

module.exports = {
  /**
   * Run the migration
   *
   * @param {Sequelize.QueryInterface} queryInterface
   * @param {Sequelize.DataTypes} types
   */
  up: async (queryInterface, types) => queryInterface.createTable('Users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: types.INTEGER,
    },
    name: {
      allowNull: false,
      type: types.STRING(255),
    },
    email: {
      allowNull: false,
      unique: true,
      type: types.STRING(254),
    },
    password: {
      allowNull: false,
      type: types.STRING(60),
    },
    positionId: {
      allowNull: false,
      type: types.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'Positions',
        key: 'id',
      },
    },
    departmentId: {
      allowNull: false,
      type: types.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'Departments',
        key: 'id',
      },
    },
    createdAt: {
      allowNull: false,
      type: types.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: types.DATE,
    },
  }),

  /**
   * Undo the migration
   *
   * @param {Sequelize.QueryInterface} queryInterface
   */
  down: async (queryInterface) => queryInterface.dropTable('Users'),
};
