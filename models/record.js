'use strict';
module.exports = (sequelize, DataTypes) => {
  const Record = sequelize.define('Record', {
    firstName: DataTypes.STRING,
    surname: DataTypes.STRING,
    dob: DataTypes.DATE,
    age: DataTypes.INTEGER,
    height: DataTypes.INTEGER,
  }, {});
  Record.associate = function(models) {
    // associations can be defined here
  };
  return Record;
};
