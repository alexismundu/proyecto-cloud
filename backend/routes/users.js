const express = require('express');
const router = express.Router();

const { getUserProperties } = require('../models/properties');

router.get('/:userId/properties', function (req, res) {
  getUserProperties(req.params.userId).then((data) => res.send({ data }));
});

module.exports = router;
