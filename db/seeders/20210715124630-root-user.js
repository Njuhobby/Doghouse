"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Users", [
      {
        userName: "admin",
        role: 0,
        email: "yihao.jiang@yuanchenggo.com",
        password: "",
        follower: 0,
        following: 0,
        quote: "Admin of yuanchenggo",
        country: "China",
        company: "Yuanchenggo",
        school: "NJU",
        weiboLink: null,
        zhihuLink: null,
        doubanLink: null,
        linkedinLink: null,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
