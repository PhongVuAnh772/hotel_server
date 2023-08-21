"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class review_star extends Model {
    
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
  review_star.init(
    {
        id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      star: {
        type: DataTypes.INTEGER,

      },
      hotel_id: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        allowNull: false,
      }
    },
    {
      sequelize,
      modelName: "review_star",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return review_star;
};
