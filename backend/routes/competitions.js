const express = require('express');
const router = express.Router();

const CompetitionController = require('../controllers/competition');
const checkAuth = require('../middleware/auth.middleware');
const extractFile = require('../middleware/image/competition-mime-type.validator');

router.get('/', CompetitionController.getCompetitions);

router.get('/:id', CompetitionController.getCompetition);

router.post('/', checkAuth, extractFile, CompetitionController.createCompetition);

module.exports = router;
