const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

const { getUserProperties } = require('../models/properties');

router.get('/:userId/properties', (req, res) => {
  getUserProperties(req.params.userId).then((data) => res.send({ data }));
});

router.post('/:userId/properties', function (req, res) {
  console.log('body: ', req.body, uuidv4());
  res.send({ data: 'Hellow world this was the post call' });
});

module.exports = router;
