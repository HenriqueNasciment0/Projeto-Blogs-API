const sendError = require('../middlewares/sendError');
const { Category } = require('../models');

const createCategory = async (name) => {
    if (!name) {
        return sendError(400, '"name" is required');
    }

    const newCategory = await Category.create({ name });

    return newCategory;
};

module.exports = {
    createCategory,
};
