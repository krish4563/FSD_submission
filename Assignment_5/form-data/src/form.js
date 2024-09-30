import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap

const FormComponent = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [highlightedFields, setHighlightedFields] = useState({});

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setHighlightedFields({ ...highlightedFields, [e.target.name]: false }); // Remove highlight when user types
  };

  // Form validation
  const validateForm = () => {
    const { username, email, phone, password, confirmPassword } = formData;
    let isValid = true;
    let newHighlightedFields = {};

    setErrorMessage(''); // Clear previous errors
    setSuccessMessage(''); // Clear success message

    // Check if any field is empty and highlight it
    if (!username) {
      newHighlightedFields.username = true;
      isValid = false;
    }
    if (!email) {
      newHighlightedFields.email = true;
      isValid = false;
    }
    if (!phone) {
      newHighlightedFields.phone = true;
      isValid = false;
    }
    if (!password) {
      newHighlightedFields.password = true;
      isValid = false;
    }
    if (!confirmPassword) {
      newHighlightedFields.confirmPassword = true;
      isValid = false;
    }

    if (!isValid) {
      setErrorMessage('All fields are required!');
      setHighlightedFields(newHighlightedFields);
      return false;
    }

    // Validate phone number
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      setErrorMessage('Phone number must be 10 digits!');
      setHighlightedFields({ phone: true });
      return false;
    }

    // Validate email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Invalid email format!');
      setHighlightedFields({ email: true });
      return false;
    }

    // Validate password
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[&$#@])[A-Za-z\d&$#@]{7,}$/;
    if (!passwordRegex.test(password)) {
      setErrorMessage('Password must be at least 7 characters long, contain one uppercase letter, one digit, and one special character (&, $, #, @).');
      setHighlightedFields({ password: true });
      return false;
    }

    // Validate confirm password
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match!');
      setHighlightedFields({ confirmPassword: true });
      return false;
    }

    return true;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSuccessMessage('Registration successful!');
      console.log('Form data submitted:', formData);
      setFormData({
        username: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
      }); // Reset form
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Registration Form</h2>
      <form onSubmit={handleSubmit} className="p-4 border rounded">
        {/* Error and Success Messages */}
        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
        {successMessage && (
          <div className="alert alert-success" role="alert">
            {successMessage}
          </div>
        )}

        {/* Form Inputs */}
        <div className="form-group mb-3">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className={`form-control ${highlightedFields.username ? 'is-invalid' : ''}`}
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className={`form-control ${highlightedFields.email ? 'is-invalid' : ''}`}
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            className={`form-control ${highlightedFields.phone ? 'is-invalid' : ''}`}
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className={`form-control ${highlightedFields.password ? 'is-invalid' : ''}`}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            className={`form-control ${highlightedFields.confirmPassword ? 'is-invalid' : ''}`}
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">Register</button>
      </form>
    </div>
  );
};

export default FormComponent;
