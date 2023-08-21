"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user_account extends Model {
    static associate(models) {
      // define association here
      // user_account.belongsTo(models.user, {
      //   foreignKey: "User_id",
      //   as: "userData",
      // });
      // user_account.belongsTo(models.accounts, {
      //   foreignKey: "Account_id",
      //   as: "accountsData",
      // });
    }
  }
  user_account.init(
    {
      Account_id: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        allowNull: false,
      },
      User_id: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "user_account",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return user_account;
};
