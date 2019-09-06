const express = require('express');
const router = express.Router();

const ClubController = require('../controllers/club');
const extractFile = require('../middleware/image/club-mime-type.validation');

router.get('/', ClubController.getClubs);

router.get('/:id', (req, res) => {
  //return perticular club
});

router.post('/', extractFile, ClubController.createClub);

module.exports = router;
