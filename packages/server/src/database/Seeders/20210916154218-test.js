// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = {
  /**
   * Run the seed
   *
   * @param {Sequelize.QueryInterface} queryInterface
   */
  up: async (queryInterface) => {
    const [costCenter] = await queryInterface.bulkInsert(
      'CostCenters',
      [{
        name: 'Centro de Custo Teste',
        createdAt: new Date(),
        updatedAt: new Date(),
      }],
      { returning: true },
    );

    const [department] = await queryInterface.bulkInsert(
      'Departments',
      [{
        name: 'Departamento Teste',
        costCenterId: costCenter.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      }],
      { returning: true },
    );

    const [position] = await queryInterface.bulkInsert(
      'Positions',
      [{
        name: 'Cargo Teste',
        createdAt: new Date(),
        updatedAt: new Date(),
      }],
      { returning: true },
    );

    await queryInterface.bulkInsert('Users', [{
      name: 'Test User',
      email: 'user@test.com',
      password: bcrypt.hashSync('test', 12),
      positionId: position.id,
      departmentId: department.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },

  /**
   * Undo the seed
   *
   * @param {Sequelize.QueryInterface} queryInterface
   */
  down: async (queryInterface) => Promise.all([
    queryInterface.bulkDelete('CostCenters', null, {}),
    queryInterface.bulkDelete('Departments', null, {}),
    queryInterface.bulkDelete('Positions', null, {}),
    queryInterface.bulkDelete('Users', null, {}),
  ]),
};
