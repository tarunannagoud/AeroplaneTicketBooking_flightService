const { where } = require("sequelize");

class Crud {
  constructor(model) {
    this.model = model;
  }
  async create(data) {
    try {
      const response = await this.model.create(data);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
  async destroy(id) {
    try {
      const response = await this.model.destroy({
        where: {
          id,
        },
      });
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
  async update(data) {
    try {
      const response = await this.model.update(
        { data },
        {
          where: {
            id: data.id,
          },
        },
      );
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
  async get(id) {
    try {
      const response = await this.model.findByPk(id);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
}
module.exports = Crud;
