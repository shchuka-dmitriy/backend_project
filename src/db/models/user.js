'use strict';

const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DateTypes.TEXT,
      allowNull: false,
      field: 'passwordHash',
      set( val ) {
        this.setDataValue('password', bcrypt.hashSync(val, 10));
      }
    },
    profilePicture: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: true
    }
  }, {});
  User.associate = function(models) {
    User.hasMany( models.Task, {
      foreignKey: 'userId'
    })
  };
  return User;
};