const Professor = require('../schemas/professor.schema');

exports.getProfessors = (req, res) => {
  Professor.find().then(document => {
    res.status(200).json({
      message: 'Professors fetched from db',
      professors: document
    });
  }).catch(err => {
    console.log('Error fetching Professors from db');
  });
};


exports.createProfessor = (req, res) => {
  const professor = new Professor({
    name: req.body.name,
    department: req.body.department,
    designation: req.body.designation,
    email: req.body.email,
    imagePath: req.body.imagePath
  });

  professor.save().then( (professor) => {
    console.log('Professor saved to db');
  }).catch( (error) => {
    console.log('Error saving to the database');
    console.log(error);
  });
};
