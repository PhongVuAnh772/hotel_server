"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("report", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      hotel_id: {
         type: Sequelize.INTEGER,
         foreignKey: true,
         allowNull: false
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false
      },
      User_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
      }

    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("report");
  },
};
