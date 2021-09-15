// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Sequelize = require('sequelize');

module.exports = {
  /**
   * Run the migration
   *
   * @param {Sequelize.QueryInterface} queryInterface
   * @param {Sequelize.DataTypes} types
   */
  up: async (queryInterface, types) => queryInterface.createTable('Departments', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: types.INTEGER,
    },
    name: {
      allowNull: false,
      type: types.STRING(50),
    },
    costCenterId: {
      allowNull: false,
      type: types.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'CostCenters',
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
  down: async (queryInterface) => queryInterface.dropTable('Departments'),
};