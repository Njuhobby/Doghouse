"use strict";

const defaluts = require("../../const/defaultValues");

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
    await queryInterface.bulkInsert("Users", [
      {
        userName: "admin",
        role: 0,
        email: "yihao.jiang@yuanchenggo.com",
        avatarUrl: defaluts.defaultUserAvatarUrl,
        cover: 1,
        position: "UI Designer",
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
    await queryInterface.bulkDelete("Roles", null, {});
    await queryInterface.bulkDelete("Users", null, {});
  },
};
