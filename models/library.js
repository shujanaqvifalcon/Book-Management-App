'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Library = sequelize.define(
    'Library',
    {
      name: { 
        type: DataTypes.STRING,
        allowNull: false 
      },
      address:{
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
  Library.associate = (models) => {
    Library.belongsToMany(models.Book, {
      through: models.LibraryBook,
    });
  }
  return Library;
};