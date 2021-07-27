const sequelize = require("../services/sequelize");

class Repo {
  constructor(modelName) {
    this.model = sequelize.model(modelName);
  }

  async findByPk(id, option = {}) {
    return await this.model.findByPk(id, option);
  }

  async findAll(option = {}) {
    return await this.model.findAll(option);
  }

  async insert(model) {
    await this.model.create(model);
  }
}

module.exports = Repo;
