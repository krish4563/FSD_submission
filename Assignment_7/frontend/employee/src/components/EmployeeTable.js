import React, { useEffect, useState } from 'react';
import { getEmployees, deleteEmployee } from '../api';
import 'bootstrap/dist/css/bootstrap.min.css';

const EmployeeTable = ({ onEdit }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    const response = await getEmployees();
    setEmployees(response.data);
  };

  const handleDelete = async (id) => {
    await deleteEmployee(id);
    fetchEmployees(); // Refresh the table after deletion
  };

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Employee ID</th>
          <th>Department</th>
          <th>Phone</th>
          <th>Joining Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee.employeeId}>
            <td>{employee.name}</td>
            <td>{employee.employeeId}</td>
            <td>{employee.department}</td>
            <td>{employee.phone}</td>
            <td>{new Date(employee.joiningDate).toLocaleDateString()}</td>
            <td>
              <button className="btn btn-warning me-2" onClick={() => onEdit(employee)}>
                Edit
              </button>
              <button className="btn btn-danger" onClick={() => handleDelete(employee.employeeId)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
