import React, { useState, useEffect } from 'react';
import { createEmployee, updateEmployee } from '../api';
import 'bootstrap/dist/css/bootstrap.min.css';

const EmployeeForm = ({ employeeToUpdate, onFormSubmit }) => {
  const [employee, setEmployee] = useState({
    name: '', employeeId: '', department: '', phone: '', joiningDate: ''
  });

  // Populate the form with employee data when editing
  useEffect(() => {
    if (employeeToUpdate) {
      setEmployee(employeeToUpdate);
    } else {
      setEmployee({
        name: '', employeeId: '', department: '', phone: '', joiningDate: ''
      });
    }
  }, [employeeToUpdate]);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (employeeToUpdate) {
      await updateEmployee(employeeToUpdate.employeeId, employee);
    } else {
      await createEmployee(employee);
    }
    // Clear form fields after submission
    setEmployee({ name: '', employeeId: '', department: '', phone: '', joiningDate: '' });
    onFormSubmit(); // Notify the parent component to refresh the employee list
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-light rounded">
      <div className="mb-3">
        <label>Name</label>
        <input type="text" name="name" className="form-control" value={employee.name} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Employee ID</label>
        <input type="text" name="employeeId" className="form-control" value={employee.employeeId} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Department</label>
        <input type="text" name="department" className="form-control" value={employee.department} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Phone</label>
        <input type="text" name="phone" className="form-control" value={employee.phone} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Joining Date</label>
        <input type="date" name="joiningDate" className="form-control" value={employee.joiningDate} onChange={handleChange} />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default EmployeeForm;
