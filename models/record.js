'use strict';
module.exports = (sequelize, DataTypes) => {
  const Record = sequelize.define('Records', {
    firstName: DataTypes.STRING,
    surname: DataTypes.STRING,
    dob: DataTypes.DATE,
    age: DataTypes.INTEGER,
    height: DataTypes.DECIMAL,
  }, {});
  Record.associate = function(models) {
    // associations can be defined here
  };
  return Record;
};
