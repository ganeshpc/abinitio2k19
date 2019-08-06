const express = require('express');

const router = express.Router();

const Professor = require('../schemas/professor.schema');

router.get('/', (req, res) => {
  //return profs
});

router.get('/:id', (req, res) => {
  //ret prof with id
});

router.post('/', (req, res) => {

  const professor = new Professor({
    name: req.body.name,
    department: req.body.department,
    designation: req.body.designation,
    email: req.body.email,
    imagePath: req.body.imagePath
  });

  professor.save().then( (professor) => {
    console.log('Professor saved to db');
  }).catch( () => {
    console.log('Error saving to the database');
  });
});

router.put('/:id', (req, res) => {
  //update prof
});

module.exports = router;
