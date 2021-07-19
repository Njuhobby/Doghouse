"use strict";
const models = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Users", models.user);
    await queryInterface.createTable("Companies", models.company);
    await queryInterface.createTable("Jobs", models.job);
    await queryInterface.createTable("Roles", models.role);
    await queryInterface.createTable("Followers", models.follower);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Followers");
    await queryInterface.dropTable("Roles");
    await queryInterface.dropTable("Jobs");
    await queryInterface.dropTable("Companies");
    await queryInterface.dropTable("Users");
  },
};
