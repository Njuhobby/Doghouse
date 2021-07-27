const { DataTypes } = require("sequelize");

const Company = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  avatar: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isStar: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  websiteUrl: {
    type: DataTypes.STRING,
  },
  country: {
    type: DataTypes.STRING,
  },
  province: {
    type: DataTypes.STRING,
  },
  city: {
    type: DataTypes.STRING,
  },
};

module.exports = Company;
