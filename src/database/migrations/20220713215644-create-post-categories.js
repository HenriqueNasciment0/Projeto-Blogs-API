'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('PostCategories', {
      postId: {
        allowNull: true,
        type: DataTypes.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: { model: 'BlogPosts', key: 'id' },
      },
      categoryId: {
        allowNull: true,
        type: DataTypes.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: { model: 'Categories', key: 'id' },
      },
    },
      { timestamps: false, });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('PostCategories');
  },
};
