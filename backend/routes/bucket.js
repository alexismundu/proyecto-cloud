const express = require('express');
const router = express.Router();

const { generateUploadURL } = require('../models/s3');



router.get('/:userId', (req, res) => {
  console.log(`req.params.userId`, req.params.userId)
  generateUploadURL({ userId: req.params.userId }).then((url) =>
    res.send({ url })
  );
});

module.exports = router;
