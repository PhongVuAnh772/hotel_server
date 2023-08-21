"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class payments extends Model {
    static associate(models) {}
  }
  payments.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      payment_method: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      payment_amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true
      }
    },
    {
      sequelize,
      modelName: "payments",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return payments;
};
