module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define(
        'PostCategory',
        {
            postId: {
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            categoryId: {
                type: DataTypes.INTEGER,
                primaryKey: true
            },
        },
        { timestamps: false },
    );

    PostCategory.associate = (models) => {
        models.BlogPost.belongsToMany(models.Category, {
            as: 'category',
            through: PostCategory,
            foreignKey: 'postId',
            otherKey: 'categoryId',
        });
        models.Category.belongsToMany(models.BlogPost, {
            as: 'blogPost',
            through: PostCategory,
            foreignKey: 'categoryId',
            otherKey: 'postId',
        });
    };

    return PostCategory;
};
