const express = require('express');
const router = express.Router();

const ProfessorController = require('../controllers/professor');

router.get('/', ProfessorController.getProfessors);

router.get('/:id', (req, res) => {
  //ret prof with id
});

router.post('/', ProfessorController.createProfessor);

router.put('/:id', (req, res) => {
  //update prof
});

module.exports = router;
