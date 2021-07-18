const Repo = require("./repo");

class CompanyRepo extends Repo {
  constructor() {
    super("Company");
  }
}

module.exports = CompanyRepo;
