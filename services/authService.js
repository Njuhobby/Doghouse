const unitOfWork = require("../repos/unitOfWork");
const result = require("./dto/result");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET, JWT_EXPIRES_IN } = require("../const/jwt");
const mapper = require("./mapper/dtoToEntityMapper");
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
      return result.ok({
        token: accessToken,
        user: found,
      });
    } catch (err) {
      return result.error(err.message);
    }
  },
  register: async (dto) => {
    const usernameExists = await unitOfWork.userRepo.findByName(dto.userName);
    if (usernameExists.length > 0)
      return result.error(errorCodes.userNameAlreadyUsed);
    const emailExists = await unitOfWork.userRepo.findByEmail(dto.email);
    if (emailExists.length > 0)
      return result.error(errorCodes.emailAlreadyinUse);

    const user = mapper.registerUserDtoToUser(dto);
    user.password = await bcrypt.hash(user.password, 10);
    await unitOfWork.userRepo.insert(user);
    return result.ok();
  },
};

module.exports = authService;
