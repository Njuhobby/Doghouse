const defaults = require("/const/defaultValues");

const dtoToEntityMapper = {
  registerUserDtoToUser: (dto) => {
    return {
      ...dto,
      follower: 0,
      following: 0,
      avatarUrl: defaults.defaultUserAvatarUrl,
    };
  },
};

module.exports = dtoToEntityMapper;
