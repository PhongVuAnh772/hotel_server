"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("rule", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      has_CO_machine: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      has_smoke_alarm: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      suitable_for_child: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      has_pet: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      many_noise: {
        type: Sequelize.BOOLEAN,
        allowNull: false  
      },
      other_rule: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("rule");
  },
};
