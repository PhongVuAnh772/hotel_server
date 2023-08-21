"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {
      user.hasMany(models.user_account, {
        foreignKey: "User_id",
        targetKey: "id",
        as: "userData",
      });
      user.hasMany(models.reservation, {
        foreignKey: "User_id",
        as: "reservationData",
        targetKey: "id",
      });
    }
  }
  user.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Full_Name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      Date_of_Birth: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      CMND: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Sex: {
        type: DataTypes.CHAR(1),
        allowNull: false,
      },
      language_talk: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      job: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      location_living: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description_of_life: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "user",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return user;
};
