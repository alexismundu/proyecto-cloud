const express = require('express');
const router = express.Router();

const {
  getUserProperties,
  createProperty,
  updateProperty,
  deleteProperty,
} = require('../models/properties');



router.get('/:userId/properties', (req, res) => {
  getUserProperties(req.params.userId).then((data) => res.send({ data }));
});

router.post('/:userId/properties', (req, res) => {
  createProperty({ userId: req.params.userId, ...req.body }).then((data) =>
    res.send({ data })
  );
});

router.put('/:userId/checkProperty/:propertyId', (req, res) => {
  updateProperty({ userId: req.params.userId, propertyId: req.params.propertyId, ...req.body }).then((data) =>
    res.send({ data })
  );
});

router.delete('/:userId/property/:propertyId', (req, res) => {
  deleteProperty({ userId: req.params.userId, propertyId: req.params.propertyId, ...req.body }).then((data) =>
    res.send({ data })
  );
});

module.exports = router;
