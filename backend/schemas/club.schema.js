const mongoose = require('mongoose');

const clubSchema = mongoose.Schema({
  name: {type: String, require: true},

  department: {type: String, require: true},

  imagePath: {type: String},

  shortDescription: {type: String, require: true},
  longDescription: {type: String, require: true},

  teamLeader: {type: String, require: true},
  facultyCoordinator: {type: String, require: true}
});

module.exports = mongoose.model('Club', clubSchema);
