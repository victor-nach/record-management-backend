const Services = require('../services');

class Controllers {
  static async getAllRecords(req, res) {
    try {
      const data = await Services.getAll();
      return res.status(200).json({
        message: 'get all records',
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

  static async updateRecord(req, res) {
    try {
      const { id } = req.params;
      const data = await Services.update(id, req.body);
      return res.status(200).json({
        message: 'successfuly updated record',
        data,
      });
    } catch (error) {
      return res.status(500);
    }
  }

  static async addRecord(req, res) {
    try {
      const data = await Services.add(req.body);
      return res.status(201).json({
        message: 'successfully added new record',
        data,
      });
    } catch (error) {
      return res.status(500);
    }
  }

  static async deleteRecord(req, res) {
    try {
      const { id } = req.params;
      const data = await Services.delete(id);
      if (data === 1) {
        return res.status(200).json({
          message: 'successfully deleted new record',
        });
      }
      return res.status(404).json({
        message: 'record not found',
      });
    } catch (error) {
      return res.status(500);
    }
  }
}

module.exports = Controllers;
