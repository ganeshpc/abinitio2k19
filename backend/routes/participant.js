const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  //get all participants
});

router.get('/:id', (req, res) => {
  //get perticular
});

router.post('/', (req, res) => {
  //add participant
});

module.exports = router;
