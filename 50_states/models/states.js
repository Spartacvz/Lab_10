'use strict';
module.exports = (sequelize, DataTypes) => {
  const States = sequelize.define('States', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    visited: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      unique: true
    },
    lat: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    lon: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    zoom: {
    type: DataTypes.INTEGER,
      allowNull: false,
      default: 5
    }
  }, {});
  States.associate = function(models) {
    // associations can be defined here
  };
  return States;
};