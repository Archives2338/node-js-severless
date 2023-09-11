const swapiService = require('../services/swapiServices');

const bcrypt = require('bcrypt');


class swapiController {

  constructor() {


  }

  async getStarWarsPeopleData(req, res) {
    try {
      console.log("entre")
      const  service = new swapiService();
      const response = await service.getSwapiPeopleDataStar();

      return {
        status: 'OK',
        data: JSON.stringify(response)
      }
      // res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getStarshipData(req,res) {

    try {
      const  service = new swapiService();
      const response = await service.getSwapiStarshipData(req);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }


  async getSupplier(req,res) {

    try {
      console.log("entre")
      const  service = new swapiService();
      const response = await service.getSupplier(req);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }

  }

  async createSupplier(req,res) {
    console.log("req",req.body)
    let {name,lastname,mail,password} = req.body;
    try {
      console.log("entre")
      const  service = new swapiService();
      const response = await service.createSupplier(name,lastname,mail,bcrypt.hashSync(password, 10));
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }

  }
}

module.exports = swapiController;
