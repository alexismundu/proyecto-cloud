const express = require('express');
const router = express.Router();

const users = require('./users');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send({ data: 'Base api URI' });
});

// Users
router.use('/users', users);

module.exports = router;
