const Department = require('../schemas/department.schema');

exports.getDepartments = (req, res) => {
  Department.find().then(document => {
    res.status(200).json({
      message: 'Departments fetched from db',
      departments: document
    });
  }).catch(err => {
    console.log('Error fetching Departments from db');
  });
};


exports.createDepartment = (req, res) => {
  const department = new Department({
    name: req.body.name,
    hod: req.body.hod,
    shortDescription: req.body.shortDescription,
    longDescription: req.body.longDescription,
    imagePath: req.body.imagePath
  });

  department.save().then( (department) => {
    console.log('Department saved to database');
  }).catch( () => {
    console.log('Error saving to the database');
  });
};
