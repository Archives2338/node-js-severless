const serverless = require('serverless-http');

const express = require('express')

const {swaggerDocs : V1SwaggerDocs}= require ("./doc/swagger")

const swapiRoutes = require('./routes/routesSwapi')

const appSwapi = express()
V1SwaggerDocs(appSwapi,4000)
appSwapi.use(express.json())
appSwapi.use(express.urlencoded({ extended: true }))
appSwapi.use('/api', swapiRoutes)


module.exports.handler = serverless(appSwapi);

