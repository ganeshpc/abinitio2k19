const express = require('express');

const router = express.Router();

const Participant = require('../schemas/participant.schema');

router.get('/', (req, res) => {
  //get all participants
});

router.get('/:id', (req, res) => {
  //get perticular
});

router.post('/', (req, res) => {
  const participant = new Participant({
    name: req.body.name,
    competitionName: req.body.competitionName,
    collegeName: req.body.collegeName,
    mobNo: req.body.mobNo,
    email: req.body.email
  });

  participant.save().then( (participant) => {
    console.log('Participant saved successfully');
    res.status(201).send();
  }).catch( () => {
    console.log('Error saving competition');
  });


});

module.exports = router;
