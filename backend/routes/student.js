const express = require('express');

const router = express.Router();

const Student = require('../schemas/student.schema');

router.get('/', (req, res) => {
  //return students
});

router.get('/:id', (req, res) => {
  //ret studnet with id
});

router.post('/', (req, res) => {

  const student = new Student({
    name: req.body.name,
    department: req.body.department,
    rollNo: req.body.rollNo,
    mobNo: req.body.mobNo,
    email: req.body.email,
    imagePath: req.body.imagePath
  });

  student.save().then( (createdStudent) => {
    res.status(201).json({
      mesage: 'Student added successfully',
      student: { ...createdStudent._doc }
    });
  });

});

router.put('/:id', (req, res) => {
  //update student
});

module.exports = router;
