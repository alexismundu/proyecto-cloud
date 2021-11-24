const express = require('express');
const router = express.Router();

const data = require('../data/propiedades');

router.get('/:userId/properties', function (req, res, next) {
  console.log('params:', req.params.userId);
  res.send({ data });
});

module.exports = router;
