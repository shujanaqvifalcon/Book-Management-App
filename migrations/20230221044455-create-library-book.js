'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('LibraryBooks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bookId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'cascade',
        reference: {
          model: 'Books',
          key: 'id',
          as: 'bookId',
        },
      },
      libraryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'cascade',
        reference: {
          model: 'Libraries',
          key: 'id',
          as: 'libraryId',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('LibraryBooks');
  }
};