const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  name: {type: String, required: true},
  hod: {type: String, required: true},

  shortDescription: {type: String, required: true},
  longDescription: {type: String, required: true},

  imagePath: {type: String}
});

module.exports = mongoose.model('Department', departmentSchema);
