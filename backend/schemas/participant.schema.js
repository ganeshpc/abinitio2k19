const mongoose = require('mongoose');

const participantSchema = mongoose.Schema({
  name: {type: String, require: true},
  competitionName: {type: String, require: true},

  collegeName: {type: String, require: true},
  mobNo: {type: String, require: true},
  email: {type: String, require: true},
});

module.exports =  mongoose.model('Participant', participantSchema);
