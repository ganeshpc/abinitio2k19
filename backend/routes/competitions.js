const express = require('express');

const router = express.Router();

const Competition = require('../schemas/competition.schema');

router.get('/', (req, res,) => {
  res.send("get all request");
});

router.get('/:id', (req, res) => {

  const competition = competitions.find( (competition) => {
    return competition.id === parseInt(req.params.id);
  });

  if(!competition) {
    res.status(404).send("course not found");
  }

  res.send(competition);
});

router.post('/', (req, res) => {

  const competition = new Competition({
    name: req.body.name,
    department: req.body.department,
    imagePath: req.body.imagePath,
    shortDescription: req.body.shortDescription,
    longDescription: req.body.longDescription,
    rules: req.body.rules,
    registrationFees: req.body.registrationFees,
    feesPer: req.body.feesPer,
    coordinator: req.body.coordinator,
    subCoordinator1: req.body.subCoordinator1,
    subCoordinator2: req.body.subCoordinator2
  });

  competition.save().then( (competition) => {
    console.log('competition saved');
  }).catch( () => {
    console.log("error saving to the database");
  });

  res.send(competition);
});

module.exports = router;
