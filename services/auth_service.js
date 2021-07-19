const unitOfWork = require("../repos/unitOfWork");
const result = require("./dto/result");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET, JWT_EXPIRES_IN } = require("../const/jwt");

const authService = {
  login: async (nameOrEmail, password) => {
    let found = await unitOfWork.userRepo.findByEmail(nameOrEmail);
    if (!found) {
      found = await unitOfWork.userRepo.findByName(nameOrEmail);
      if (!found) {
        return result.error("invalid username or email address");
      }
    }

    try {
      const isValid = await bcrypt.compare(password, found.password);
      if (!isValid) return result.error("invalid username or email address");

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
  register: async (user) => {
    const usernameExists = await unitOfWork.userRepo.findByName(user.userName);
    if (usernameExists.length > 0)
      return result.error(`userName ${user.userName} already used`);
    const emailExists = await unitOfWork.userRepo.findByEmail(user.email);
    if (emailExists.length > 0)
      return result.error(`email ${user.email} already used`);

    user.password = await bcrypt.hash(user.password, 10);
    await unitOfWork.userRepo.insert(user);
    return result.ok();
  },
};

module.exports = authService;
