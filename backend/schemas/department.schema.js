const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  name: {type: String, required: true, unique: true},
  hod: {type: String, ref: 'Professor'},

  shortDescription: {type: String, required: true},
  longDescription: {type: String, required: true},

  imagePath: {type: String}
});

module.exports = mongoose.model('Department', departmentSchema);
