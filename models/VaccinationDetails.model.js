'use strict';
const {
    Model,
    Sequelize
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class VaccinationDetails extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
    }

    VaccinationDetails.init({
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        certificateNo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nidNo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        passportNo: {
            type: DataTypes.STRING
        },
        nationality: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dateOfBirth: {
            type: DataTypes.DATE,
            allowNull: true
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dateOfVaccinationDose1: {
            type: DataTypes.DATE
        },
        nameOfVaccinationDose1: {
            type: DataTypes.STRING
        },
        dateOfVaccinationDose2: {
            type: DataTypes.DATE
        },
        nameOfVaccinationDose2: {
            type: DataTypes.STRING
        },
        dateOfVaccinationDose3: {
            type: DataTypes.DATE
        },
        nameOfVaccinationDose3: {
            type: DataTypes.STRING
        },
        vaccinationCenter: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        vaccinatedBy: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        totalDoses: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

    }, {
        sequelize,
        tableName: 'vaccination_details',
        modelName: 'VaccinationDetails',
    });
    return VaccinationDetails;
};
