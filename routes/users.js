const express = require("express");
const router = express.Router();
const userService = require("../services/user_service");

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

module.exports = router;
