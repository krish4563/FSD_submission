import React, { useState } from 'react';
import EmployeeForm from './components/EmployeeForm';
import EmployeeTable from './components/EmployeeTable';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [employeeToUpdate, setEmployeeToUpdate] = useState(null);
  const [refreshTable, setRefreshTable] = useState(false);

  const handleEdit = (employee) => {
    setEmployeeToUpdate(employee);
  };

  const handleFormSubmit = () => {
    setRefreshTable(!refreshTable); // Trigger table refresh
    setEmployeeToUpdate(null); // Clear form after submission
  };

  return (
    <div className="container">
      <h1 className="my-4 text-center">Employee Management System</h1>
      <EmployeeForm employeeToUpdate={employeeToUpdate} onFormSubmit={handleFormSubmit} />
      <EmployeeTable onEdit={handleEdit} key={refreshTable} />
    </div>
  );
}

export default App;
