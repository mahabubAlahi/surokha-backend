'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
  
    await queryInterface.createTable('users', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false
        },
        phone: {
          type: Sequelize.STRING,
          allowNull: false
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
    });
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('users');
  }
};
