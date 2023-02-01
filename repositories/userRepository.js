const db = require("../models");
const User = db.User;

const getUserByPhone = async (phone) => {
    return await User.findOne({
        where: {
            phone: phone
        }
    });
}

module.exports = {
    getUserByPhone
}