const express = require('express');

const StudentController = require('../controllers/student');
const Student = require('../schemas/student.schema');
const router = express.Router();

router.get('/', (req, res) => {
  Student.find().then(document => {
    res.status(200).json({
      message: 'Departments fetched from db',
      students: document
    });
  }).catch(err => {
    console.log('Error fetching Students from db');
  });
});

router.get('/:id', (req, res) => {
  //ret studnet with id
});

router.post('/', StudentController.createStudent);

router.put('/:id', (req, res) => {
  //update student
});

module.exports = router;
