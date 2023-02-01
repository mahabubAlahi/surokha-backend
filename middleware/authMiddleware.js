const userService = require('../services/user-service');
const config = require('../config/auth.config');
const jwt = require("jsonwebtoken");

const verifySignInRequestObject = async (req, res, next) => {
    try {
        await userService.signInSchema.validateAsync(req.body);
        next();
    } catch (err) {
        res.status(422).send({
            status: false,
            msg: err.message,
            data: null
        });
    }
}

const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'] || req.headers['Authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(403).send({
            status: false,
            msg: "Token not found"
        });
    }
    jwt.verify(token, config.accessTokenSecret, (err, decoded) => {
        if (err) return res.status(401).send({
            status: false,
            msg: err
        });
        next();
    });
};

module.exports = {
    verifySignInRequestObject,
    verifyToken
}