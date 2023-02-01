const vaccinationService = require('../services/vaccination-service');

const verifyVaccinationRequestObject = async (req, res, next) => {
    try {
        await vaccinationService.createVaccinationSchema.validateAsync(req.body);
        next();
    } catch (err) {
        res.status(422).send({
            status: false,
            msg: err.message,
            data: null
        });
    }
}

module.exports = {
    verifyVaccinationRequestObject
}