"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("hotel", {
     id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      hotel_type: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      total_guest_rested: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      total_bedrooms: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      total_bed: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      bedroom_door_lock: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      bathroom_type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      other_person_in_hotel: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      hotel_has: {
        type: Sequelize.ARRAY(Sequelize.STRING) 
      },
      hotel_title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      hotel_description_icon: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      hotel_description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      hotel_value_money: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      hotel_coupon: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      hotel_is_booking: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      location_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("hotel");
  },
};
