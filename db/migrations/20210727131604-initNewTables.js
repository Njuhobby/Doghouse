"use strict";
const models = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("PostLikes", models.postLike);
    await queryInterface.createTable("PostComments", models.postComment);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("PostComments");
    await queryInterface.dropTable("PostLikes");
  },
};
