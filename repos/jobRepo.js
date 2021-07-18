const Repo = require("./repo");

class JobRepo extends Repo {
  constructor() {
    super("Job");
  }
}

module.exports = JobRepo;
