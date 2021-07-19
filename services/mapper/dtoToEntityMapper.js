const dtoToEntityMapper = {
  userDtoToUser: (userDto) => {
    return {
      ...userDto,
      follower: 0,
      following: 0,
    };
  },
};

module.exports = dtoToEntityMapper;
