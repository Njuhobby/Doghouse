"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Users", "position", {
      type: Sequelize.DataTypes.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn("Users", "cover", {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Users", "cover");
    await queryInterface.removeColumn("Users", "position");
  },
};
