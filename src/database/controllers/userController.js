const UserService = require('../services/userService');

const create = async (req, res, next) => {
    const { displayName, email, password, image } = req.body;

    const user = await UserService.create(displayName, email, password, image);

    if (user.error) {
        return next(user.error);
    }

    res.status(201).json({ token: user });
};

module.exports = {
    create,
};
