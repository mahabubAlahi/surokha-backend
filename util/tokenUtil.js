const jwt = require("jsonwebtoken");

const generateToken = (payload, secret, config) => {
    return jwt.sign(payload, secret, config);
};

module.exports = {
    generateToken
}