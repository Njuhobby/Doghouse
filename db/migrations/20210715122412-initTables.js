"use strict";
const userModel = require("../models/User");
const companyModel = require("../models/Company");
const jobModel = require("../models/Job");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("User", userModel);
    await queryInterface.createTable("Company", companyModel);
    await queryInterface.createTable("Job", jobModel);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Job");
    await queryInterface.dropTable("Company");
    await queryInterface.dropTable("User");
  },
};
