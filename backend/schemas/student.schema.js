const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
  name: {type: String, require: true},
  department: {type: mongoose.Schema.Types.ObjectId, ref: 'Department', require: true},
  rollNo: { type: String, require: true},
  mobNo: { type: String, require: true},
  email: { type: String, require: true, uinique: true},
  designation: {type: String, require: true},
  imagePath: {type: String}
});

module.exports = mongoose.model('Student', studentSchema);
