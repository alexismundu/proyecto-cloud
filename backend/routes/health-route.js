// import dependencies and initialize the express router
const express = require('express');

const router = express.Router();

let dbStatusStr = 'OFF';

// get health of application
const getHealth  = (req, res) => {
  res.json({
    status: 'UP',
    dbConectionStatus: dbStatusStr
  });
};


/**
 * @swagger
 * /health: 
 *  get: 
 *     operationId: get
 *     description: Get health status of nodejsmicroservice
 *     responses: 
 *        200: 
 *           description: Health check response
 *           schema: 
 *              $ref: #/definitions/healthResponse
 *           
 *           examples: 
 *              application/json: 
 *                 status: UP
 *                 "dbConnectionStatus": "OK"
 */

// define routes
router.get('', getHealth);

module.exports = router;
