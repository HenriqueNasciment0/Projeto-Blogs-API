require('dotenv').config();
const UserService = require('../services/loginService');

const createT = async (req, res, next) => {
    const { email, password } = req.body;

    const user = await UserService.createT({ email, password });

    if (user.error) return next(user.error);

     res.status(200).json({ token: user });
};

module.exports = {
    createT,
};
