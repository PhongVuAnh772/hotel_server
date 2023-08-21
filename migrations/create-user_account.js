"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("user_account", {
      Account_id: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        allowNull: false,
      },
      User_id: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("user_account");
  },
};
