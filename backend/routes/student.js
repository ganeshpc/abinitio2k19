const express = require('express');
const router = express.Router();

const StudentController = require('../controllers/student');
const extractFile = require('../middleware/mime-type.validator');

router.get('/', StudentController.getStudents);

router.get('/:id', (req, res) => {
  //ret studnet with id
});

router.post('/', extractFile, StudentController.createStudent);

router.put('/:id', (req, res) => {
  //update student
});

module.exports = router;
