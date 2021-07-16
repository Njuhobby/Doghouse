const express = require("express");
const router = express.Router();
const userService = require("../services/user_service");
const authService = require("../services/auth_service");

/* GET all users. */
router.get("/", async function (req, res, next) {
  const allUsers = await userService.getAll();
  res.json(allUsers);
});

/* GET specific user with pk */
router.get("/getUser:userId", async function (req, res, next) {
  const user = await userService.getUser(req.params.userId);
  res.json(user);
});

/* POST user login */
router.post("/login", async function (req, res, next) {
  const result = await authService.login(
    req.body.nameOrEmail,
    req.body.password
  );
  res.json(result);
});

/* POST register new user */
router.post("/register", async function (req, res, next) {
  const result = await authService.register({
    userName: req.body.userName,
    password: req.body.password,
    email: req.body.email,
    role: req.body.role,
    follower: 0,
    following: 0,
  });
  res.json(result);
});

module.exports = router;
