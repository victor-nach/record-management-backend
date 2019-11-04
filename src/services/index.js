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
}

module.exports = Services;
