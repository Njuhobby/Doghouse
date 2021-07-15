const { Sequelize } = require("sequelize");
const models = require("../db/models");

const sequelize = new Sequelize(
  "postgres://postgres:900722JYHjyh@127.0.0.1:5432/yuanchenggo",
  {
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

sequelize.define("User", models.user);
sequelize.define("Company", models.company);
sequelize.define("Job", models.job);

module.exports = sequelize;
