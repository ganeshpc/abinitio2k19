const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  name: {type: String, required: true},
  hod: {type: String, required: true}
});
