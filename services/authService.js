const unitOfWork = require("../repos/unitOfWork");
const result = require("./dto/result");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET, JWT_EXPIRES_IN } = require("../const/jwt");
const dteMapper = require("./mapper/dtoToEntityMapper");
const etdMapper = require("./mapper/entityToDtoMapper");
const errorCodes = require("../const/errorCodes");

const authService = {
  login: async (email, password) => {
    let found = await unitOfWork.userRepo.findByEmail(email);
    if (!found) {
      return result.error(errorCodes.userNotFound);
    }

    try {
      const isValid = await bcrypt.compare(password, found.password);
      if (!isValid) return result.error(errorCodes.wrongPassword);

      // found user and the password is correct
      const accessToken = jwt.sign({ userId: found.id }, JWT_SECRET, {
        expiresIn: JWT_EXPIRES_IN,
      });
      const userDto = etdMapper.userToUserDto(found);
      return result.ok({
        token: accessToken,
        user: userDto,
      });
    } catch (err) {
      return result.error(err.message, 500);
    }
  },
  register: async (dto) => {
    const usernameExists = await unitOfWork.userRepo.findByName(dto.userName);
    if (usernameExists) return result.error(errorCodes.userNameAlreadyUsed);
    const emailExists = await unitOfWork.userRepo.findByEmail(dto.email);
    if (emailExists) return result.error(errorCodes.emailAlreadyinUse);

    const user = dteMapper.registerUserDtoToUser(dto);
    user.password = await bcrypt.hash(user.password, 10);
    await unitOfWork.userRepo.insert(user);
    return result.ok();
  },
};

module.exports = authService;
