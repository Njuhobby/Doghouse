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
    references: {
      model: "Users",
      key: "id",
    },
    onUpdate: "RESTRICT",
    onDelete: "RESTRICT",
  },
  followsWhom: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Users",
      key: "id",
    },
    onUpdate: "RESTRICT",
    onDelete: "RESTRICT",
  },
};

module.exports = Follower;
