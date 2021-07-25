const express = require("express");
const router = express.Router();
const jobService = require("../services/jobService");

/* GET all jobs. */
router.get("/", async function (req, res, next) {
  const jobs = await jobService.getAll();
  res.parseServiceResult(jobs);
});

module.exports = router;
