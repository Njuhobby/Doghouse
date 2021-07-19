const { DataTypes } = require("sequelize");

const Follower = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  who: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  followsWhom: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
};

module.exports = Follower;
