const sequelize = require("./sequelize");
const User = sequelize.model("User");
const result = require("./dto/result");

const userService = {
  getUser: async (id) => {
    const user = await User.findByPk(id);
    if (!user) return result.error("user doesn't exist");

    return result.ok(user);
  },
  createUser: async (user) => {
    await User.create(user);
    return result.ok(user);
  },
};

module.exports = userService;
