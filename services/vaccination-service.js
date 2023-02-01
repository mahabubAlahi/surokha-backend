const Joi = require('joi');
const vaccinationRepository = require('../repositories/vaccinationRepository');


const createVaccinationSchema = Joi.object({
    certificateNo: Joi.string()
        .required(),
    nidNo: Joi.string()
        .required(),
    passportNo: Joi.string(),
    nationality: Joi.string(),
    name: Joi.string().required(),
    dateOfBirth: Joi.date()
        .required(),
    gender:  Joi.string().required(),
    dateOfVaccinationDose1: Joi.date(),
    nameOfVaccinationDose1: Joi.string(),
    dateOfVaccinationDose2: Joi.date(),
    nameOfVaccinationDose2: Joi.string(),
    dateOfVaccinationDose3: Joi.date(),
    nameOfVaccinationDose3: Joi.string(),
    vaccinationCenter: Joi.string().required(),
    vaccinatedBy: Joi.string().required(),
    totalDoses: Joi.number().integer()

});

const createVaccinationService = async(vaccinationBody) => {

    try{

        const value = await vaccinationRepository.saveVaccinationDetails(vaccinationBody);
    
        return value;
    }catch(err){
        console.log(err);
        throw new Error("Creating Vaccination Details Failed");
    }
}

const getAllVaccinationService = async() => {

    try{

        const value = await vaccinationRepository.getAllVaccinationDetails();
    
        return value;
    }catch(err){
        console.log(err);
        throw new Error("Getting Vaccination Details Failed");
    }
}

const getVaccinationServiceById = async(id) => {

    try{

        const value = await vaccinationRepository.getVaccinationDetailsById(id);
    
        return value;
    }catch(err){
        console.log(err);
        throw new Error("Getting Vaccination Details By Id Failed");
    }
}

module.exports = {
    createVaccinationSchema,
    createVaccinationService,
    getAllVaccinationService,
    getVaccinationServiceById
}