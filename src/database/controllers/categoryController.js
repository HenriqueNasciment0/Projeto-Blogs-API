const CategoryService = require('../services/categoryService');

const createCategory = async (req, res, next) => {
    const { name } = req.body;

    const newCategory = await CategoryService.createCategory(name);

    if (newCategory.error) return next(newCategory.error);

    res.status(201).json(newCategory);
};

const getAll = async (req, res) => {
    const categories = await CategoryService.getAll();

    res.status(200).json(categories);
};

module.exports = {
    createCategory,
    getAll,
};
