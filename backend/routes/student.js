const express = require('express');
const router = express.Router();

const StudentController = require('../controllers/student');

router.get('/', StudentController.getStudents);

router.get('/:id', (req, res) => {
  //ret studnet with id
});

router.post('/', StudentController.createStudent);

router.put('/:id', (req, res) => {
  //update student
});

module.exports = router;
