const CategoryService = require('../services/categoryService');

const createCategory = async (req, res, next) => {
    const { name } = req.body;

    const newCategory = await CategoryService.createCategory(name);

    if (newCategory.error) return next(newCategory.error);

    res.status(201).json(newCategory);
};

module.exports = {
    createCategory,
};
