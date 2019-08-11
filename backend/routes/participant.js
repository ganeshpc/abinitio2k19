const express = require('express');
const router = express.Router();

const ParticipantController = require('../controllers/participant');

router.get('/', ParticipantController.getParticipants);

router.get('/:id', (req, res) => {
  //get perticular
});

router.post('/', ParticipantController.createParticipant);

module.exports = router;
