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

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection successfully created");
  })
  .catch((error) => {
    console.log(`Unable to create db connection ${error}`);
  });

sequelize.define("User", models.user, {
  timestamps: false,
});
sequelize.define("Company", models.company, {
  timestamps: false,
});
sequelize.define("Job", models.job, {
  timestamps: false,
});

module.exports = sequelize;
