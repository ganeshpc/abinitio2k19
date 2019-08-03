const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  //return all departments
});

router.get('/:id', (req, res) => {
  //return department with the given id
});

router.post('/', (req, res) => {
  //add given department
});

router.put('/:id', (req, res) => {
  //update given dept
});

module.exports = router;
