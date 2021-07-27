const Repo = require("./repo");

class postRepo extends Repo {
  constructor() {
    super("Post");
  }

  async findForUser(userId, option = {}) {
    return await this.model.findAll({
      where: {
        userId: userId,
      },
      ...option,
    });
  }
}

module.exports = postRepo;
