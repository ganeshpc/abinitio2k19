const Student = require('../schemas/student.schema');

exports.createStudent = (req, res) => {

  const student = new Student({
    name: req.body.name,
    department: req.body.department,
    rollNo: req.body.rollNo,
    mobNo: req.body.mobNo,
    email: req.body.email,
    imagePath: req.body.imagePath
  });

  student.save().then( (createdStudent) => {
    res.status(201).json({
      mesage: 'Student added successfully',
      student: { ...createdStudent._doc }
    });
  });

};
