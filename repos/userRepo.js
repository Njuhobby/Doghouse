const Repo = require("./repo");

class UserRepo extends Repo {
  constructor() {
    super("User");
  }

  async findByName(name) {
    return await this.model.findOne({
      where: {
        userName: name,
      },
    });
  }

  async findByEmail(email) {
    return await this.model.findOne({
      where: {
        email: email,
      },
    });
  }
}

module.exports = UserRepo;
