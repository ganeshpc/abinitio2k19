const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const usreSchema = mongoose.Schema({
  email: {type: String, require: true, unique: true},
  password: {type: String, require: true},
  userInfo: {type: mongoose.Schema.Types.ObjectId, ref: 'Student', require: true}
});

usreSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', usreSchema);
