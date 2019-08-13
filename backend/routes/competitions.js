const express = require('express');
const router = express.Router();

const CompetitionController = require('../controllers/competition');
const checkAuth = require('../middleware/auth.middleware');

router.get('/', CompetitionController.getCompetitions);

router.get('/:id', CompetitionController.getCompetition);

router.post('/', checkAuth, CompetitionController.createCompetition);

module.exports = router;
