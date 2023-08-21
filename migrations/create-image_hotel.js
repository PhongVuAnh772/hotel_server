"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("image_hotel", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      image_content: {
        type: Sequelize.BLOB,
        allowNull: false
      },
      hotel_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("image_hotel");
  },
};
