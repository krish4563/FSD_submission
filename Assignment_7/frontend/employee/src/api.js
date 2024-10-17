import axios from 'axios';

const API_URL = 'http://localhost:5000/api/employees';

export const getEmployees = async () => axios.get(API_URL);
export const createEmployee = async (employee) => axios.post(API_URL, employee);
export const deleteEmployee = async (id) => axios.delete(`${API_URL}/${id}`);
export const updateEmployee = async (id, employee) => axios.put(`${API_URL}/${id}`, employee);
