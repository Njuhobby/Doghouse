const unitOfWork = require("../repos/unitOfWork");
const result = require("./dto/result");
const _ = require("lodash");
const etdMapper = require("./mapper/entityToDtoMapper");

const userService = {
  getAll: async () => {
    const users = await unitOfWork.userRepo.findAll();

    return result.ok(
      _.map(users, function (o) {
        return etdMapper.userToUserDto(o);
      })
    );
  },
  getUser: async (id) => {
    const user = await unitOfWork.userRepo.findByPk(id);
    if (!user) return result.error("user doesn't exist");
    const userDto = etdMapper.userToUserDto(user);

    return result.ok(userDto);
  },
};

module.exports = userService;
