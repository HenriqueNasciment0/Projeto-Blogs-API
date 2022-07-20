const BlogPostService = require('../services/blogPostService');

const create = async (req, res, next) => {
    const { token } = req;
    const { title, content, categoryIds } = req.body;

    const newPost = await BlogPostService.create({ userId: token.id, title, content, categoryIds });

    if (newPost.error) return next(newPost.error);

    res.status(201).json(newPost);
};

module.exports = {
    create,
};
