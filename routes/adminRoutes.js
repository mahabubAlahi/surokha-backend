const express = require('express');
const router = express.Router();

const userController = require("../controllers/userController");
const authMiddleware = require('../middleware/authMiddleware');
const vaccinationMiddleware = require('../middleware/vaccinationMiddleware');
const vaccinationController = require('../controllers/vaccinationController');

const BASE_PREFIX = "/api";

router.route("/sigin").post(authMiddleware.verifySignInRequestObject, userController.signin);
router.route("/create-vaccination").post(authMiddleware.verifyToken, vaccinationMiddleware.verifyVaccinationRequestObject, vaccinationController.createVaccinationDetails);
router.route("/get-all-vaccination").get(authMiddleware.verifyToken, vaccinationController.getAllVaccinationDetails);
router.route("/get-vaccination").get(authMiddleware.verifyToken, vaccinationController.getVaccinationDetailsById);

module.exports = {
    router,
    basePrefix: BASE_PREFIX
};

