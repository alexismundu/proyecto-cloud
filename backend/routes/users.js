const express = require('express');
const router = express.Router();

const { createProperty } = require('../models/properties');

const { getUserProperties } = require('../models/properties');

router.get('/:userId/properties', (req, res) => {
  getUserProperties(req.params.userId).then((data) => res.send({ data }));
});

router.post('/:userId/properties', (req, res) => {
  createProperty({ userId: req.params.userId, ...req.body }).then((data) =>
    res.send({ data })
  );
});

module.exports = router;
