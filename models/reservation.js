"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class reservation extends Model {
    static associate(models) {
      reservation.belongsTo(models.user, {
        foreignKey: "User_id",
        as: "reservationData",
      });
      reservation.belongsTo(models.hotel, {
        foreignKey: "hotel_id",
        as: "reservationsHotelData",
      });
    }
  }
  reservation.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      start_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      end_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      total_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      User_id: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        allowNull: false,
      },
      hotel_id: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "reservation",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return reservation;
};
