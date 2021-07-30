const unitOfWork = require("../repos/unitOfWork");
const result = require("./dto/result");
const _ = require("lodash");
const etdMapper = require("./mapper/entityToDtoMapper");

const postService = {
  getAllForUser: async (userId) => {
    const posts = await unitOfWork.postRepo.findForUser(userId);
    return result.ok(
      _.map(posts, function (o) {
        return etdMapper.postToPostDto(o);
      })
    );
  },
};

module.exports = postService;
