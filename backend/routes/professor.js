const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  //return profs
});

router.get('/:id', (req, res) => {
  //ret prof with id
});

router.post('/', (req, res) => {
  //add prof
});

router.put('/:id', (req, res) => {
  //update prof
});

module.exports = router;
