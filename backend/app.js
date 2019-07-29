const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/test?authSource=admin', { user: 'admin', pass: 'abinitio2k19', useNewUrlParser: true }).then( () => {
  console.log("Connected to the the database...");
}).catch(() => {
  console.log("Connection down!!!");
});

const competitionsRoutes = require('./routes/competitions');

app.get('/message', (req, res) => {
  console.log("hello");
  res.send("hello");
});

const Competition = require('./schemas/competition.schema');
const Student = require('./schemas/student.schema');

app.use('/api/competitions', competitionsRoutes);

module.exports = app;
