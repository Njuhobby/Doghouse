const jwt = require("jsonwebtoken");
const userService = require("../services/user_service");
const jwtCommon = require("../common/jwt");

const authMiddleware = function (req, res, next) {
  const { authorization } = req.headers;
  if (!authorization) {
    res.status(403).send("Not authorized");
  }

  try {
    const accessToken = authorization.split(" ")[1];
    const { userId } = jwt.verify(accessToken, jwtCommon.JWT_SECRET);
    const user = userService.getUser(userId);
    if (!user.success) {
      res.status(403).send("Not authorized");
    }
    next();
  } catch (error) {
    res.status(403).send(`Not authorized: ${error}`);
  }
};

module.exports = authMiddleware;
