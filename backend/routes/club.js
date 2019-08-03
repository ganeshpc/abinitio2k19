const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  //return all the clubs in the db
});

router.get('/:id', (req, res) => {
  //return perticular club
});

router.post('/', (req, res) => {
  //add incoming post to db
});

module.exports = router;
