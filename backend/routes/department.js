const express = require('express');
const router = express.Router();

const DepartmentController = require('../controllers/department');

router.get('/', DepartmentController.getDepartments);

router.get('/:id', (req, res) => {
  //return department with the given id
});

router.post('/', DepartmentController.createDepartment);

router.put('/:id', (req, res) => {
  //update given dept
});

module.exports = router;
