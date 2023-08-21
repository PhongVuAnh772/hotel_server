"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class account extends Model {
    static associate(models) {
      account.hasMany(models.user_account, {
        foreignKey: "Account_id",
        as: "accountsData",
        targetKey: "id",
      });
    }
  }
  account.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      gmail: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email_verified: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      profile_image: {
        type: DataTypes.BLOB,
        allowNull: true,
      },
      roles: {
        type: DataTypes.ARRAY(DataTypes.STRING),
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
      modelName: "account",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return account;
};
