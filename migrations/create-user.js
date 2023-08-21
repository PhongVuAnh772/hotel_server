"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("user", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Full_Name: {
        type:Sequelize.STRING,
        allowNull: false 
      },
      
      Date_of_Birth: {
        type:Sequelize.STRING,
        allowNull: false
      },   
      Country: {
        type:Sequelize.STRING,
        allowNull: false
      },
      Email: {
        type:Sequelize.STRING,
        allowNull: false
      },
      CMND: {
        type:Sequelize.STRING,
        allowNull: false
      },
      Sex: {
        type:Sequelize.CHAR(1),
        allowNull: false
      },
      language_talk: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      job: {
        type: Sequelize.STRING,
        allowNull: false
      },
      location_living: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description_of_life: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("user");
  },
};
