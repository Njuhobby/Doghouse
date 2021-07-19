const { DataTypes } = require("sequelize");

const User = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  avatarUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  follower: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  following: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quote: {
    type: DataTypes.TEXT,
  },
  country: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  company: {
    type: DataTypes.STRING,
  },
  school: {
    type: DataTypes.STRING,
  },
  weiboLink: {
    type: DataTypes.STRING,
  },
  zhihuLink: {
    type: DataTypes.STRING,
  },
  doubanLink: {
    type: DataTypes.STRING,
  },
  linkedinLink: {
    type: DataTypes.STRING,
  },
};

module.exports = User;
