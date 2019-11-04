module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Records', [
    {
      id: 1,
      firstName: 'victor',
      surname: 'Iheanacho',
      dob: new Date(),
      age: 56,
      height: 1.8,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      firstName: 'dele',
      surname: 'ahmed',
      dob: new Date(),
      age: 13,
      height: 1.3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      firstName: 'sani',
      surname: 'musiliu',
      dob: new Date(),
      age: 62,
      height: 1.65,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {}),

  down: (queryInterface, Sequelize) => {},
};
