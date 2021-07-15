"use strict";
const userModel = require("../models/User");
const companyModel = require("../models/Company");
const jobModel = require("../models/Job");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Users", userModel);
    await queryInterface.createTable("Companies", companyModel);
    await queryInterface.createTable("Jobs", jobModel);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Jobs");
    await queryInterface.dropTable("Companies");
    await queryInterface.dropTable("Users");
  },
};
