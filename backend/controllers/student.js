const Student = require('../schemas/student.schema');

exports.createStudent = (req, res) => {
  const student = new Student({
    name: req.body.name,
    department: req.body.department,
    rollNo: req.body.rollNo,
    mobNo: req.body.mobNo,
    email: req.body.email,
    imagePath: req.body.imagePath,
    designation: req.body.designation
  });

  student.save().then( (createdStudent) => {
    res.status(201).json({
      mesage: 'Student added successfully',
      student: { ...createdStudent._doc }
    });
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
