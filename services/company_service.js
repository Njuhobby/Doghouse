const sequelize = require("./sequelize");
const Company = sequelize.model("Company");
const result = require("./dto/result");

const companyService = {
  getAll: async () => {
    const companies = await Company.findAll();
    return result.ok(companies);
  },
  create: async (company) => {
    await Company.create(company);
    return result.ok();
  },
};

module.exports = companyService;
