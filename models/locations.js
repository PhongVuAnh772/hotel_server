"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class locations extends Model {
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
  locations.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      location_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      longitude: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      latitude: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "locations",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return locations;
};
