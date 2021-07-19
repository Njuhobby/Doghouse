const unitOfWork = require("../repos/unitOfWork");
const result = require("./dto/result");

const userService = {
  getAll: async () => {
    const users = await unitOfWork.userRepo.findAll();
    return result.ok(users);
  },
  getUser: async (id) => {
    const user = await unitOfWork.userRepo.findByPk(id);
    if (!user) return result.error("user doesn't exist");

    return result.ok(user);
  },
};

module.exports = userService;
