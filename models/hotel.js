"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class hotel extends Model {
    
    static associate(models) {
      
    }
  }
  hotel.init(
    {
        id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      hotel_type: {
        type: DataTypes.STRING,
        allowNull: false,

      },
      total_guest_rested: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      total_bedrooms: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      total_bed: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      bedroom_door_lock: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      bathroom_type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      other_person_in_hotel: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      hotel_has: {
        type: DataTypes.ARRAY(DataTypes.STRING) 
      },
      hotel_title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      hotel_description_icon: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      hotel_description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      hotel_value_money: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      hotel_coupon: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      hotel_is_booking: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      location_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true
      }
    },
    {
      sequelize,
      modelName: "hotel",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return hotel;
};
