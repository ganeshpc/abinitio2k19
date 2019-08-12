const express = require('express');
const router = express.Router();

const CompetitionController = require('../controllers/competition');

router.get('/', CompetitionController.getCompetitions);

router.get('/:id', CompetitionController.getCompetition);

router.post('/', CompetitionController.createCompetition);

module.exports = router;
