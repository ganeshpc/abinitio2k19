const mongoose = require('mongoose');

const professorSchema = new mongoose.Schema({
  name: {type: String, required: true},
  department: {type: mongoose.Schema.Types.ObjectId, ref: 'Department', required: true},
  designation: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  imagePath: {type: String}
});

module.exports = mongoose.model('Professor', professorSchema);
