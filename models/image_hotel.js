"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class image_hotel extends Model {
    
    static associate(models) {
      // image-hotel.belongsTo(models.customers, {
      //   foreignKey: "Customer_id",
      //   as: "customerData",
      // });
      // image-hotel.belongsTo(models.accounts, {
      //   foreignKey: "Account_id",
      //   as: "accountsData",
      // });
    }
  }
  image_hotel.init(
    {
        id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      image_content: {
        type: DataTypes.BLOB,
        allowNull: false
      },
      hotel_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true
      }
    },
    {
      sequelize,
      modelName: "image_hotel",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return image_hotel;
};
