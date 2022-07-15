const { User } = require('../models');
const sendError = require('../middlewares/sendError');
const { createToken } = require('../middlewares/createToken');

const validateUser = (displayName, email, password) => {
    const regexEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    switch (true) {
        case (displayName.length < 8):
            return sendError(400, '"displayName" length must be at least 8 characters long');
        case (!regexEmail.test(email)):
            return sendError(400, '"email" must be a valid email');
        case (password.length < 6):
            return sendError(400, '"password" length must be at least 6 characters long');
        default:
            return {};
    }
};

const create = async (displayName, email, password, image) => {
    const userValid = validateUser(displayName, email, password);

    if (userValid.error) {
        return userValid;
    }

    const existingEmail = await User.findOne({ where: { email } });

    if (existingEmail) {
        return sendError(409, 'User already registered');
    }

    const newUser = await User.create({ displayName, email, password, image });

    const token = createToken(newUser.id);

    return token;
};

module.exports = {
    create,
};
