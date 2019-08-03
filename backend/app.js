const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

//connecting mongo db
mongoose.connect('mongodb://localhost/test?authSource=admin', { user: 'admin', pass: 'abinitio2k19', useNewUrlParser: true }).then( () => {
  console.log("Connected to the the database...");
}).catch(() => {
  console.log("Connection down!!!");
});

//routing for competition route
const competitionsRoutes = require('./routes/competitions');

//initial get url
app.get('/message', (req, res) => {
  console.log("hello");
  res.send("hello");
});

//defining schemas
const Competition = require('./schemas/competition.schema');
const Student = require('./schemas/student.schema');

app.use( (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
  next();
});

//instruct server to route the url of below given file in competitionRout
app.use('/api/competitions', competitionsRoutes);

module.exports = app;
