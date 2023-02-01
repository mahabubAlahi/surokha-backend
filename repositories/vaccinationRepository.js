
const db = require("../models");
const VaccinationDetails = db.VaccinationDetails;

const saveVaccinationDetails = async (vaccinationObject) => {
    return await VaccinationDetails.create(vaccinationObject);
}

const getAllVaccinationDetails = async () => {
    return await VaccinationDetails.findAll();
}

const getVaccinationDetailsById = async(id) => {
    return await VaccinationDetails.findOne({
        where: {
            id: id
        }
    });
}

module.exports = {
    saveVaccinationDetails,
    getAllVaccinationDetails,
    getVaccinationDetailsById
}