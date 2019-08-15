const Student = require('../schemas/student.schema');


exports.createStudent = (req, res) => {
  const url = req.protocol + '://' + req.get('host');
  const student = new Student({
    name: req.body.name,
    department: req.body.department,
    rollNo: req.body.rollNo,
    mobNo: req.body.mobNo,
    email: req.body.email,
    imagePath: req.body.imagePath,
    designation: req.body.designation,
    imagePath: url + '/images/students/' + req.file.filename
  });

  student.save().then(createdStudent => {
    res.status(201).json({
      mesage: 'Student added successfully',
      student: createdStudent
    });
  }).catch(err => {
    res.status(500).json({
      message: 'Error savint Student to database',
      error: err
    })
  });
};


exports.getStudents = (req, res) => {
  Student.find().then(document => {
    res.status(200).json({
      message: 'Students fetched from db',
      students: document
    });
  }).catch(err => {
    console.log('Error fetching Students from db');
  });
};
