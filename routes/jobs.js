const express = require("express");
const router = express.Router();
const jobService = require("../services/jobService");

/* GET all jobs. */
router.get("/", function (req, res, next) {
  const jobs = jobService.getAll();
  res.json(jobs);
});

module.exports = router;
