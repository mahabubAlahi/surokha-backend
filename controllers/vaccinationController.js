const vaccinationService = require('../services/vaccination-service');

const createVaccinationDetails = async(req, res) => {

    try{

        const value = await vaccinationService.createVaccinationService(req.body);

        res.status(200).send({
            status: true,
            msg: "Create Vaccination Details Successful",
            data: value
        });

    }catch(err) {
        res.status(400).send({
            status: false,
            msg: err.message,
            data: null
    });
    }

}

const getAllVaccinationDetails = async(req, res) => {
    try{

        const value = await vaccinationService.getAllVaccinationService();

        res.status(200).send({
            status: true,
            msg: "Getting All Vaccination Details Successful",
            data: value
        });

    }catch(err) {
        res.status(400).send({
            status: false,
            msg: err.message,
            data: null
        });
    }
}

const getVaccinationDetailsById = async (req, res) => {
    const vaccinationId = req.query.id;

    if(vaccinationId){
        try{

            const value = await vaccinationService.getVaccinationServiceById(vaccinationId);
    
            res.status(200).send({
                status: true,
                msg: "Getting Vaccination Details Successful",
                data: value
            });
    
        }catch(err) {
            res.status(400).send({
                status: false,
                msg: err.message,
                data: null
            });
        }
    }else{
        res.status(404).send({
            status: false,
            msg: "Vaccination Id Null",
            data: null
        });
    }
}

module.exports = {
    createVaccinationDetails,
    getAllVaccinationDetails,
    getVaccinationDetailsById
}