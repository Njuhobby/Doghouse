const UserRepo = require("./userRepo");
const CompanyRepo = require("./companyRepo");
const JobRepo = require("./jobRepo");
const PostRepo = require("./postRepo");

const userRepo = new UserRepo();
const jobRepo = new JobRepo();
const companyRepo = new CompanyRepo();
const postRepo = new PostRepo();

module.exports = {
  userRepo,
  companyRepo,
  jobRepo,
  postRepo,
};
