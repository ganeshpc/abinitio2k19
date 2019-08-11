const express = require('express');
const router = express.Router();

const ClubController = require('../controllers/club');

router.get('/', ClubController.getClubs);

router.get('/:id', (req, res) => {
  //return perticular club
});

router.post('/', ClubController.createClub);

module.exports = router;
