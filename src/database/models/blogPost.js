module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
        },
        content: {
            type: DataTypes.STRING,
        },
        userId: {
            type: DataTypes.INTEGER,
            foreignKey: true,
        },
        published: {
            type: DataTypes.DATE,
        },
        updated: {
            type: DataTypes.DATE,
        }
    },
        {
            tableName: 'BlogPosts',
            createdAt: 'published',
            updatedAt: 'updated',
        });

    BlogPost.associate = (models) => {
        BlogPost.belongsTo(models.User, { foreignKey: 'userId', as: 'blogPost' })
    }

    return BlogPost;
};
