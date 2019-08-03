const mongoose = require('mongoose');

const competitionSchema = mongoose.Schema({
  name: {type: String, require: true},
  department: {type: String, require: true},

  imagePath: {type: String, require: true},

  shortDescription: {type: String, require: true},
  longDescription: {type: String, require: true},
  rules: {type: String, require: true},
  registrationFees: {type: Number, require: true},
  feesPer: {type: String, require: true},

  coordinator: {type: String, require: true},
  subCoordinator1: {type: String},
  subCoordinator2: {type: String}
});

module.exports = mongoose.model('Competition', competitionSchema);  //name of the collection created in the database will be plural
//that of model name "competitions" in this case
