'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    'Book',
    {
      name: { 
        type: DataTypes.STRING,
        allowNull: false 
      },
      year:{
        type: DataTypes.STRING,
        allowNull: false
      },
      isDeleted:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      timestamps: true,
    }
  );
  Book.associate = (models) => {
    Book.belongsTo(models.Author, {
      foreignKey: 'authorId',
      as: 'author',
    });
    Book.belongsToMany(models.Library, {
      through: models.LibraryBook,
    });
  };
  return Book;
};