const swapiModels = require('../model/swapiModel');
const starshipModel = require('../model/starshipModel');
const connection = require('../db/index.js');
const axios = require('axios');


class swapiService {

  constructor() {
  }


  async getSwapiPeopleDataStar(){
    try {
      console.log("entre denuevo")
      const response = await axios.get('https://swapi.dev/api/people/1/');
      // console.log("response",response.data)

      const swapiModel = new swapiModels(response.data);
      const responseTranslate = await swapiModel.transLateJson();
      return responseTranslate;


    } catch (error) {

        throw error;
    }

  }

  async getSwapiStarshipData(id){


    try {


      const response = await axios.get(`https://swapi.dev/api/starships/${id}/`);


      const starshipModels = new starshipModel(response.data);
      const responseTranslate = await starshipModels.translateStarshipJson();
      return responseTranslate;
    } catch (error) {

        throw error;
    }
  }



  async getSupplier(){
    console.log("llegue aca")
    try {
      const response = await connection.query(`SELECT id_supplier, name,lastname,mail,password FROM supplier `);
      console.log("response",response)
      return response;
    } catch (error) {
      console.log("error",error)
      throw error;
    }
  }

  async createSupplier(name,lastname,mail,password)
  {
    try {

      const supplier = await connection.query(`INSERT INTO supplier (name,lastname,mail,password) VALUES ('${name}','${lastname}','${mail}','${password}')`);


      const response = {
        status: "OK",
        data: supplier

      }
      return response;

    } catch (error) {
      console.log("error",error)
      throw error;
    }

  }


}

module.exports = swapiService;
