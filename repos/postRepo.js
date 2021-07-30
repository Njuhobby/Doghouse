const Repo = require("./repo");
const sequelize = require("../services/sequelize");

class postRepo extends Repo {
  constructor() {
    super("Post");
  }

  async findForUser(userId, option = {}) {
    const user = sequelize.model("User");
    const postComment = sequelize.model("PostComment");
    const postLike = sequelize.model("PostLike");
    return await this.model.findAll({
      where: {
        userId: userId,
      },
      include: [user, postLike, postComment],
      ...option,
    });
  }
}

module.exports = postRepo;
