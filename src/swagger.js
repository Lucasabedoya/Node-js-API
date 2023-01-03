// // import swaggerJSDoc from "swagger-jsdoc";
// // import SwaggerUi from "swagger-ui-express";

const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

//metadata info about our API

const options = {
    definition: {
        openapi: "3.0.0",
        info: { tittle: 'Basic crud API', description: 'Crud basico de tabla Personas SQL con node JS', version: '1.0.0' },
    },
    apis: ['src/routes/personas.routes.js', 'src/database/database.js'],
};

//Docs en JSON Format
const swaggerSpec = swaggerJSDoc(options);

//Function to setup our docs
const swaggerDocs = ( app, port ) => {
    app.use('/api/docs', swaggerUi.serve, swaggerUi.setup( swaggerSpec ));
    app.get('/api/docs.json', ( req, res ) => {
        res.setHeader('Content-Type', 'application/json');
        res.send( swaggerSpec )
    });
    console.log(`📑 Docs are avalaible at http://localhost:${port}/api/docs`)
};

module.exports = { 
    swaggerDocs,
}