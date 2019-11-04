const models = require('../../models');

class Services {
  static async getAll() {
    const data = await models.Records.findAll();
    const Records = [];
    data.forEach((item) => {
      Records.push(item.dataValues);
    });
    return Records;
  }

  static async getOne(id) {
    const { dataValues } = await models.Records.findOne({ where: { id } });
    return dataValues;
  }

  static async update(id, updatedRecord) {
    const result = await models.Records.update({ ...updatedRecord }, { where: { id }, returning: true, plain: true });
    return result[1].dataValues;
  }
}

module.exports = Services;
