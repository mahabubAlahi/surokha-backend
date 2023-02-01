'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    
    await queryInterface.createTable('vaccination_details', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        certificateNo: {
          type: Sequelize.STRING,
          allowNull: false
        },
        nidNo: {
          type: Sequelize.STRING,
          allowNull: false
        },
        passportNo: {
          type: Sequelize.STRING
        },
        nationality: {
          type: Sequelize.STRING,
          allowNull: false
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        dateOfBirth: {
          type: Sequelize.DATE,
          allowNull: true
        },
        gender: {
          type: Sequelize.STRING,
          allowNull: false
        },
        dateOfVaccinationDose1: {
          type: Sequelize.DATE
        },
        nameOfVaccinationDose1: {
          type: Sequelize.STRING
        },
        dateOfVaccinationDose2: {
          type: Sequelize.DATE
        },
        nameOfVaccinationDose2: {
          type: Sequelize.STRING
        },
        dateOfVaccinationDose3: {
          type: Sequelize.DATE
        },
        nameOfVaccinationDose3: {
          type: Sequelize.STRING
        },
        vaccinationCenter: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        vaccinatedBy: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        totalDoses: {
          type: Sequelize.INTEGER,
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
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('vaccination_details');
  }
};
