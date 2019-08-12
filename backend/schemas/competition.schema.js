const mongoose = require('mongoose');

const competitionSchema = mongoose.Schema({
  name: {type: String, require: true},
  department: {type: mongoose.Schema.Types.ObjectId, ref: 'Department', require: true},

  imagePath: {type: String, require: true},

  shortDescription: {type: String, require: true},
  longDescription: {type: String, require: true},
  rules: {type: String, require: true},
  registrationFees: {type: Number, require: true},
  feesPer: {type: String, require: true},

  coordinator: {type: mongoose.Schema.Types.ObjectId, ref: 'Student', require: true},
  subCoordinator1: {type: mongoose.Schema.Types.ObjectId, ref: 'Student'},
  subCoordinator2: {type: mongoose.Schema.Types.ObjectId, ref: 'Student'}
});

module.exports = mongoose.model('Competition', competitionSchema);  //name of the collection created in the database will be plural
//that of model name "competitions" in this case
