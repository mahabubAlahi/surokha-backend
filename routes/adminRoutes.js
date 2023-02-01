const express = require('express');
const router = express.Router();

const testController = require("../controllers/test-controller");

const BASE_PREFIX = "/api";

router.route("/test").get(testController.test);

module.exports = {
    router,
    basePrefix: BASE_PREFIX
};

