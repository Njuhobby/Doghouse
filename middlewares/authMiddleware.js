const jwt = require("jsonwebtoken");
const userService = require("../services/user_service");
const jwtCommon = require("../const/jwt");

const authMiddleware = async function (req, res, next) {
  const { authorization } = req.headers;
  if (!authorization) {
    res.status(401).send("Not authorized");
  }

  try {
    const accessToken = authorization.split(" ")[1];
    const { userId } = jwt.verify(accessToken, jwtCommon.JWT_SECRET);
    const user = await userService.getUser(userId);
    req.user = user;
    if (!user.success) {
      res.status(401).send("Not authorized");
    }
    next();
  } catch (error) {
    res.status(401).send(`Not authorized: ${error}`);
  }
};

module.exports = authMiddleware;
