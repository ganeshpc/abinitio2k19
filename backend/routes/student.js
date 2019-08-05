const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  //return students
});

router.get('/:id', (req, res) => {
  //ret studnet with id
});

router.post('/', (req, res) => {
  //add student
});

router.put('/:id', (req, res) => {
  //update student
});

module.exports = router;
