const Services = require('../services');

class Controllers {
  static async getAllRecords(req, res) {
    try {
      const data = await Services.getAll();
      return res.status(200).json({
        message: 'get all records route',
        data,
      });
    } catch (error) {
      return res.status(500);
    }
  }

  static async getSingleRecord(req, res) {
    try {
      const { id } = req.params;
      const data = await Services.getOne(id);
      return res.status(200).json({
        message: 'get single record',
        data,
      });
    } catch (error) {
      return res.status(500);
    }
  }
}

module.exports = Controllers;
