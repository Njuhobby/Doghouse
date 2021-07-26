"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Roles", [
      {
        id: 0,
        description: "管理员",
      },
      {
        id: 1,
        description: "打工人",
      },
      {
        id: 2,
        description: "金主",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Roles", null, {});
  },
};
