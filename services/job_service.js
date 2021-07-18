const unitOfWork = require("../repos/unitOfWork");
const result = require("./dto/result");

const jobService = {
  getAll: async () => {
    const jobs = await unitOfWork.jobRepo.getAll();
    return result.ok(jobs);
  },
  create: async (job) => {
    await unitOfWork.jobRepo.insertNew(job);
    return result.ok();
  },
};

module.exports = jobService;
