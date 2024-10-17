const express = require('express');
const router = express.Router();
const { createEmployee, deleteEmployee, updateEmployee, getAllEmployees } = require('../controllers/employeeController');

router.post('/employees', createEmployee);
router.delete('/employees/:id', deleteEmployee);
router.put('/employees/:id', updateEmployee);
router.get('/employees', getAllEmployees);

module.exports = router;
