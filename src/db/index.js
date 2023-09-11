// conectar a la base de datos
// import { createConnection } from 'mysql2';
const createConnection = require('mysql2')
require('dotenv').config();

const create = createConnection.createPool({
  host: process.env.DB_HOST,
  user:process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});



let conecction={
  query: async function(text, params){
    return new Promise((resolve,reject)=>{
      create.query(text,params,(err,result)=>{
        if(err){
          reject(err)
        }
        resolve(result)
      })
    })

    }
}

module.exports = conecction;
