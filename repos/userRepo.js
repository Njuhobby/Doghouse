const Repo = require("./repo");

class UserRepo extends Repo {
  constructor() {
    super("User");
  }

  async findByName(name, option = {}) {
    return await this.model.findOne({
      where: {
        userName: name,
      },
      ...option,
    });
  }

  async findByEmail(email, option = {}) {
    return await this.model.findOne({
      where: {
        email: email,
      },
      ...option,
    });
  }
}

module.exports = UserRepo;
