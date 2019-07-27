const express = require('express');

const app = express();

const competitionsRoutes = require('./routes/competitions');

app.get('/message', (req, res) => {
  console.log("hello");
  res.send("hello");
});

app.use('/api/competitions', competitionsRoutes);

module.exports = app;
