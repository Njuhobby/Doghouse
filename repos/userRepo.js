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

  async findByName(name) {
    return await this.model.findOne({
      where: {
        userName: name,
      },
      attributes: { exclude: ["password"] },
    });
  }

  async findByEmail(email) {
    return await this.model.findOne({
      where: {
        email: email,
      },
      attributes: { exclude: ["password"] },
    });
  }
}

module.exports = UserRepo;
