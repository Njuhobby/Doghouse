const unitOfWork = require("../repos/unitOfWork");
const result = require("./dto/result");

const companyService = {
  getAll: async () => {
    const companies = await unitOfWork.companyRepo.findAll();
    return result.ok(companies);
  },
  create: async (company) => {
    await unitOfWork.companyRepo.insert(company);
    return result.ok();
  },
};

module.exports = companyService;
