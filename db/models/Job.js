const { DataTypes } = require("sequelize");

const Job = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  companyId: {
    type: DataTypes.INTEGER,
    references: {
      model: "Companies",
      key: "id",
    },
    allowNull: false,
    onUpdate: "RESTRICT",
    onDelete: "RESTRICT",
  },
  createdAt: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  jobCategory: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  salary: {
    type: DataTypes.STRING,
  },
  postContent: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
};

module.exports = Job;
