const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
  name: {type: String, require: true},
  department: {type: String, require: true},
  designation: {type: String, require: true},
  mobNo: { type: String, require: true},

  imagePath: {type: String}
});

module.exports = mongoose.model('Student', studentSchema);
