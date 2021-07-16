const sequelize = require("./sequelize");
const User = sequelize.model("User");
const result = require("./dto/result");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET, JWT_EXPIRES_IN } = require("../const/jwt");

const authService = {
  login: async (nameOrEmail, password) => {
    let found = await User.findOne({
      where: {
        email: nameOrEmail,
      },
    });
    if (!found) {
      found = await User.findOne({
        where: {
          username: nameOrEmail,
        },
      });
      if (!found) {
        return result.error("invalid username or email address");
      }
    }

    bcrypt.compare(password, found.password, (err, isValid) => {
      if (err) return result.error(err.message);
      if (!isValid) return result.error("invalid username or email address");

      // found user and the password is correct
      const accessToken = jwt.sign({ userId: found.id }, JWT_SECRET, {
        expiresIn: JWT_EXPIRES_IN,
      });
      return result.ok({
        token: accessToken,
        user: found,
      });
    });
  },
  register: async (user) => {
    const usernameExists = await User.findAll({
      where: {
        username: user.username,
      },
    });
    if (usernameExists.length > 0)
      return result.error(`username ${user.username} already used`);
    const emailExists = await User.findAll({
      where: {
        email: user.email,
      },
    });
    if (emailExists.length > 0)
      return result.error(`email ${user.email} already used`);

    user.password = await bcrypt.hash(user.password, 10);
    await User.create(user);
    return result.ok();
  },
};

module.exports = authService;
