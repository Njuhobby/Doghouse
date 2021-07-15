const sequelize = require("./sequelize");
const Job = sequelize.model("Job");
const result = require("./dto/result");

const jobService = {
  getAll: async () => {
    const jobs = await Job.findAll();
    return result.ok(jobs);
  },
  create: async (job) => {
    await Job.create(job);
    return result.ok();
  },
};

module.exports = jobService;
