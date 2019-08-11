const express = require('express');

const StudentController = require('../controllers/student');

const router = express.Router();

router.get('/', (req, res) => {
  //return students
});

router.get('/:id', (req, res) => {
  //ret studnet with id
});

router.post('/', StudentController.createStudent);

router.put('/:id', (req, res) => {
  //update student
});

module.exports = router;
