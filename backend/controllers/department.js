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
  const url = req.protocol + '://' + req.get('host');
  const department = new Department({
    name: req.body.name,
    hod: req.body.hod,
    shortDescription: req.body.shortDescription,
    longDescription: req.body.longDescription,
    imagePath: url + '/images/departments/' + req.file.filename
  });

  department.save().then(department => {
    console.log('Department saved to database');
  }).catch(err => {
    console.log('Error saving to the database: ' + err);
  });
};
