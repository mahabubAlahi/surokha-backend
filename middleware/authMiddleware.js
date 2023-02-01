const userService = require('../services/user-service');

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

module.exports = {
    verifySignInRequestObject
}