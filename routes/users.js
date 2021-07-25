const express = require("express");
const router = express.Router();
const userService = require("../services/userService");
const authService = require("../services/authService");

/* GET all users. */
router.get("/", async function (req, res, next) {
  const allUsers = await userService.getAll();
  res.parseServiceResult(allUsers);
});

/* GET specific user with pk */
router.get("/getUser:userId", async function (req, res, next) {
  const user = await userService.getUser(req.params.userId);
  res.parseServiceResult(user);
});

/* POST user login */
router.post("/login", async function (req, res, next) {
  const result = await authService.login(req.body.email, req.body.password);
  res.parseServiceResult(result);
});

/* POST register new user */
router.post("/register", async function (req, res, next) {
  const result = await authService.register({
    userName: req.body.userName,
    password: req.body.password,
    email: req.body.email,
    role: req.body.role,
  });
  res.parseServiceResult(result);
});

module.exports = router;
