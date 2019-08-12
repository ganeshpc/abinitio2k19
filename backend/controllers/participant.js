const Participant = require('../schemas/participant.schema');

exports.getParticipants = (req, res) => {
  Participant.find().then(document => {
    res.status(200).json({
      message: 'Participants fetched from db',
      participants: document
    });
  }).catch(err => {
    console.log('Error fetching Participants from db');
  });
};


exports.createParticipant = (req, res) => {
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
};
