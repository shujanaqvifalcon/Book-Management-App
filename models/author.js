'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define(
    'Author',
    {
      name: { 
        type: DataTypes.STRING,
        allowNull: false 
      },
      dob:{
        type: DataTypes.DATE,
        allowNull: false
      },
      genre:{
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
  Author.associate = (models) => {
    Author.hasMany(models.Book, {
      foreignKey: { name: 'authorId', allowNull: false },
      as: 'authorId',
    });
  };
  return Author;
};