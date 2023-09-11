const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');


const options = {

  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API SWAPI',
      version: '1.0.0',
      description: 'API SWAPI',
    },

  },
  apis : ["src/routes/routesSwapi.js"]
};


const swaggerSpec = swaggerJSDoc(options);


const swaggerDocs = (app,port) => {

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
}


module.exports = {swaggerDocs};
