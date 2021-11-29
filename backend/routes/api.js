const express = require('express');
const router = express.Router();

const users = require('./users');
const bucket = require('./bucket');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send({ data: 'Base api URI' });
});

// Users
router.use('/users', users);
// Bucket
router.use('/bucket', bucket);

module.exports = router;
