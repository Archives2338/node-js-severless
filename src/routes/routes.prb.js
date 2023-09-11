const express = require('express')
const swapiController = require('../controllers/swapiController')
const router2 = express.Router()

const app = express()
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const apiSwapi = new swapiController();
app.get('/', apiSwapi.getStarWarsPeopleData);
app.get('/starship/:id', function(req, res) {
  apiSwapi.getStarshipData(req.params.id,res);
  } );

app.get('/get-supplier', apiSwapi.getSupplier);

app.post('/create-supplier', apiSwapi.createSupplier);

// app.use
module.exports = app;
