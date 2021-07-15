const express = require("express");
const router = express.Router();
const companyService = require("../services/company_service");

/* GET all companies. */
router.get("/", async function (req, res, next) {
  const allCompanies = await companyService.getAll();
  res.json(allCompanies);
});

module.exports = router;
