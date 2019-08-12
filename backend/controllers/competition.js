const Competition = require('../schemas/competition.schema');

exports.getCompetitions = (req, res,) => {
  Competition.find().then(document => {
    res.status(200).json({
      message: 'Competitions fetched from db',
      competitions: document
    });
  }).catch(err => {
    console.log('Error fetching Competitions from db');
  });
};


exports.getCompetition = (req, res) => {

  const competition = competitions.find(competition => {
    return competition.id === parseInt(req.params.id);
  });

  if(!competition) {
    res.status(404).send("course not found");
  }

  res.send(competition);
};


exports.createCompetition = (req, res) => {

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
    res.send(competition);
  }).catch(err => {
    console.log("error saving Competition to the database");
  });
};
