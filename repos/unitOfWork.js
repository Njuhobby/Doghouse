const UserRepo = require("./userRepo");
const CompanyRepo = require("./companyRepo");
const JobRepo = require("./jobRepo");

const userRepo = new UserRepo();
const jobRepo = new JobRepo();
const companyRepo = new CompanyRepo();

module.exports = {
  userRepo,
  companyRepo,
  jobRepo,
};
