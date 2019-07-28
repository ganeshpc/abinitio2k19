const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true }).then( () => {
  console.log("Connected to the the database...");
}).catch(() => {
  console.log("Connection down!!!");
});

const competitionsRoutes = require('./routes/competitions');

app.get('/message', (req, res) => {
  console.log("hello");
  res.send("hello");
});

app.use('/api/competitions', competitionsRoutes);

module.exports = app;
