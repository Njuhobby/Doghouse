"use strict";
const models = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Roles", models.role);
    await queryInterface.createTable("Users", models.user);
    await queryInterface.createTable("Companies", models.company);
    await queryInterface.createTable("Jobs", models.job);
    await queryInterface.createTable("Followers", models.follower);
    await queryInterface.createTable("Posts", models.post);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Posts");
    await queryInterface.dropTable("Followers");
    await queryInterface.dropTable("Jobs");
    await queryInterface.dropTable("Companies");
    await queryInterface.dropTable("Users");
    await queryInterface.dropTable("Roles");
  },
};
