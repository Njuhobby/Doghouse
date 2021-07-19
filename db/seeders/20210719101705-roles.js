"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Roles", [
      {
        id: 0,
        description: "Admin",
      },
      {
        id: 1,
        description: "employee",
      },
      {
        id: 2,
        description: "employer",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Roles", null, {});
  },
};
