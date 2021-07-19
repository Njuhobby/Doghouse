const sequelize = require("../services/sequelize");

class Repo {
  constructor(modelName) {
    this.model = sequelize.model(modelName);
  }

  async findByPk(id) {
    return await this.model.findByPk(id);
  }

  async findAll() {
    return await this.model.findAll();
  }

  async insert(model) {
    await this.model.create(model);
  }
}

module.exports = Repo;
