const Joi = require('joi');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userRepository = require('../repositories/userRepository')
const config = require('../config/auth.config');
const {generateToken, secret} = require("../util/tokenUtil");

const signInSchema = Joi.object({
    phone: Joi.string()
        .required(),
    password: Joi.string()
        .required()
});

const authenticateUser = async (requestBody) => {
    let userNotFound = false;
    let passwordIsValid = true;
    let response = {};
    const user = await userRepository.getUserByPhone(requestBody.phone);
    if(user == null){
        userNotFound = true;
    }else{
        passwordIsValid = bcrypt.compareSync(requestBody.password, user.password);

        if (passwordIsValid) {
           
            const payload = {
                id: user.id,
                phone: user.phone
            }

            const accessToken = await generateToken(payload, config.accessTokenSecret,
                {expiresIn: config.accessTokenLifeSpan});

            response = {
                id: user.id,
                phone: user.phone,
                accessToken
            };
        }
    }

    return [userNotFound, passwordIsValid, response];
}

module.exports = {
    authenticateUser,
    signInSchema
}