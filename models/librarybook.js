'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const LibraryBook = sequelize.define(
    'LibraryBook',
    {
      
    },
    {
      timestamps: true,
    }
  );
  
  return LibraryBook;
};