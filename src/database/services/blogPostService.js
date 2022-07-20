// const { Op } = require('sequelize');
const sendError = require('../middlewares/sendError');
const { PostCategory, BlogPost, Category } = require('../models');

const validateCategoryIds = async (categoryIds) => {
    const categories = await Category.findAll();

    const mapCategoryIds = await categories.map((category) => category.id);

    const existingCategoryId = await categoryIds.filter((id) => mapCategoryIds.includes(id));

    return existingCategoryId;
};

const create = async ({ userId, title, content, categoryIds }) => {
    if (!title || !content || !categoryIds) {
        return sendError(400, 'Some required fields are missing');
    }

    const realCategoryId = await validateCategoryIds(categoryIds);

    if (realCategoryId.length !== categoryIds.length) {
        return sendError(400, '"categoryIds" not found');
    }

    const newPost = await BlogPost.create({ userId, title, content });

    categoryIds.forEach(async (categoryId) => {
        await PostCategory.create({ postId: newPost.id, categoryId });
    });

    return newPost;
};

module.exports = {
    create,
};
