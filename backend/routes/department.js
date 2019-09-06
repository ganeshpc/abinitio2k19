const express = require('express');
const router = express.Router();

const DepartmentController = require('../controllers/department');
const extractFile = require('../middleware/image/department-mime-type.validator');

router.get('/', DepartmentController.getDepartments);

router.get('/:id', (req, res) => {
  //return department with the given id
});

router.post('/', extractFile, DepartmentController.createDepartment);

router.put('/:id', (req, res) => {
  //update given dept
});

module.exports = router;
