"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("reservation", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      start_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      end_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      total_price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      User_id: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        allowNull: false,
      },
      hotel_id: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      isCanceled: {
        allowNull: true,
        type: Sequelize.BOOLEAN,
        
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("reservation");
  },
};
