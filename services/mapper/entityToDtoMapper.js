const entityToDtoMapper = {
  userToUserDto: (user) => {
    return {
      userName: user.dataValues.userName,
      email: user.dataValues.email,
      role: user.dataValues.role,
      avatarUrl: user.dataValues.avatarUrl,
      follower: user.dataValues.follower,
      following: user.dataValues.following,
      country: user.dataValues.country,
      school: user.dataValues.school,
      weiboLink: user.dataValues.weiboLink,
      zhihuLink: user.dataValues.zhihuLink,
      doubanLink: user.dataValues.doubanLink,
      linkedinLink: user.dataValues.linkedinLink,
      company: user.dataValues.company,
      quote: user.dataValues.quote,
    };
  },

  postToPostDto: (post) => {
    return post;
  },
};
module.exports = entityToDtoMapper;
