const express = require('express');

const router = express.Router();

const Club = require('../schemas/club.schema');

router.get('/', (req, res) => {
  Club.find().then(document => {
    res.status(200).json({
      message: 'Clubs fetched from db',
      clubs: document
    });
  }).catch(err => {
    console.log('Error fetching Clubs from db');
  });
});

router.get('/:id', (req, res) => {
  //return perticular club
});

router.post('/', (req, res) => {
  const club = new Club({
    name: req.body.name,
    department: req.body.department,
    imagePath: req.body.imagePath,
    shortDescription: req.body.shortDescription,
    longDescription: req.body.longDescription,
    teamLeader: req.body.teamLeader,
    facultyCoordinator: req.body.facultyCoordinator
  });

  club.save().then( (club) => {
    console.log('club saved');
  }).catch( () => {
    console.log('Error saving club');
  });
});

module.exports = router;
