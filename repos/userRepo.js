const Repo = require("./repo");

class UserRepo extends Repo {
  constructor() {
    super("User");
  }

  async findAll() {
    return await this.model.findAll({
      attributes: { exclude: ["password"] },
    });
  }

  async findByPk(id) {
    return await this.model.findByPk(id, {
      attributes: { exclude: ["password"] },
    });
  }
}

module.exports = UserRepo;
