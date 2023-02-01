const userService = require('../services/user-service');

const signin = async (req, res) => {
    
    try {
        const [userNotFound, passwordIsValid, response] = await userService.authenticateUser(req.body);
        if (userNotFound) {
            res.status(404).send({
                status: false,
                msg: "User not found",
                data: null
            });
        } else if (!passwordIsValid) {
            res.status(400).send({
                status: false,
                msg: "Invalid Credentials",
                data: null
            });
        } 
        else {
            res.status(200).send({
                status: true,
                msg: "Sigin Successful",
                data: response
            });
        }
    } catch (err) {
        res.status(500).send({
                status: false,
                msg: "Sigin Failed",
                data: err.message
        });
    }
};

module.exports = {
    signin
}

