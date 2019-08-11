const express = require('express');

const router = express.Router();

const Department = require('../schemas/department.schema');

router.get('/', (req, res) => {
  Department.find().then(document => {
    res.status(200).json({
      message: 'successful execution',
      departments: document
    });
  })
});

router.get('/:id', (req, res) => {
  //return department with the given id
});

router.post('/', (req, res) => {

  const department = new Department({
    name: req.body.name,
    hod: req.body.hod,
    shortDescription: req.body.shortDescription,
    longDescription: req.body.longDescription,
    imagePath: req.body.imagePath
  });

  department.save().then( (department) => {
    console.log('Department saved to database');
  }).catch( () => {
    console.log('Error saving to the database');
  });
});

router.put('/:id', (req, res) => {
  //update given dept
});

module.exports = router;
