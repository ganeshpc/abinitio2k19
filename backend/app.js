const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());                       //for using body json of request


//connecting mongo db
mongoose.connect('mongodb://localhost/test?authSource=admin', { user: 'admin', pass: 'abinitio2k19', useNewUrlParser: true }).then( () => {
  console.log("Connected to the the database...");
}).catch(() => {
  console.log("Connection down!!!");
});


//Routes
const competitionsRoutes = require('./routes/competitions');
const clubRoutes = require('./routes/club');
const departmentRoutes = require('./routes/department');
const professorRoutes = require('./routes/professor');
const studentRoutes = require('./routes/student');


//CORS
app.use( (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
  next();
});


//Routing
app.use('/api/competitions', competitionsRoutes);
app.use('/api/clubs', clubRoutes);
app.use('/api/departments', departmentRoutes);
app.use('/api/professors', professorRoutes);
app.use('/api/students', studentRoutes);


module.exports = app;
