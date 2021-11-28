// import dependencies and initialize the express router
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const router = express.Router();


// require('dotenv').config()

const swaggerOptions = {
  swaggerDefinition: {
    swagger: "2.0",
    info: {
      "title": "Swagger ",
      "description": "Feel free to see our API doc",
      "termsOfService": "http://example.com/terms/",
      "contact": {
        "name": "Othón Escandón",
        "email": "othon@ibm.com"
      },
      "version": "1.0.0"
    },
    servers: [`http://localhost:${3001}`],
    components: {}

  },
  apis: ['routes/health-route.js', 'routes/user-routes.js', 'routes/api-routes.js', 'routes/swagger-route.js'],
  tags: ['camp']
}


const swaggerDoc = swaggerJsDoc(swaggerOptions)


// define routes
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDoc));
router.use('', swaggerUi.serve);
router.get('', swaggerUi.setup(swaggerDoc));

////////////////////////////////////////////////////////////////////////////////////
////////////////////////    All Model definitions   ////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
/**
 * @swagger
 * definitions:
 *   House:
 *     type:  object
 *     properties:
 *       id:
 *         type:  string
 *         definition: Is the uploaded property id
 *         example:  5fcbc892299a5b10b4acf6dd
 *       details: 
 *         type: string
 *         definition: A description of the property to upload
 *         example: Breve description de la casa
 *       phone: 
 *         type: string
 *         definition: Properties Contact Number
 *         example: 3312345678
 *       address:
 *         type:  string
 *         definition: Properties Address
 *         examople: La Calma 345
 *       thumbnail: 
 *         type: string
 *         definition: uploaded property image
 *         example: https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80
 *       isChecked: 
 *         type: boolean
 *         description: If the property has been called in order to get more info and detail
 *         example: true
 *   healthResponse:
 *     type:  object
 *     properties:
 *  
 */



////////////////////////////////////////////////////////////////////////////////////
//////////////////////// All Components definitions ////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
/**
 * @swagger
 * components:
 *   schemas:
 *     House:
 *       type:  object
 *       properties:
 *         id:
 *           type:  string
 *           definition: Is the uploaded property id
 *           example:  85673207-e384-4966-a18b-698598683acd
 *         details: 
 *           type: string
 *           definition: A description of the property to upload
 *           example: Breve description de la casa
 *         phone: 
 *           type: string
 *           definition: Properties Contact Number
 *           example: 3312345678
 *         address:
 *           type:  string
 *           definition: Properties Address
 *           examople: La Calma 345
 *         thumbnail: 
 *           example: https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80
 *         isChecked: 
 *           type: boolean
 *           description: If the property has been called in order to get more info and detail
 *           example: true
 *     
 */



module.exports = router;
