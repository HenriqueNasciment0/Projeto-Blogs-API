'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('BlogPosts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      content: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      userId: {
        allowNull: true,
        type: DataTypes.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: { model: 'Users', key: 'id' },
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'published',
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'updated',
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('BlogPosts');
  },
};
