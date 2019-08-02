const express = require('express');

const router = express.Router();


router.get('/', (req, res,) => {
  res.send("competitions");
});

router.post('/', (req, res) => {
  res.send(req.body.message);
});

module.exports = router;
