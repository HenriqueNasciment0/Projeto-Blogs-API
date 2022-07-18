const UserService = require('../services/userService');

const create = async (req, res, next) => {
    const { displayName, email, password, image } = req.body;

    const user = await UserService.create(displayName, email, password, image);

    if (user.error) {
        return next(user.error);
    }

    res.status(201).json({ token: user });
};

const getAll = async (_req, res) => {
    const allUsers = await UserService.getAll();

    res.status(200).json(allUsers);
};

module.exports = {
    create,
    getAll,
};
