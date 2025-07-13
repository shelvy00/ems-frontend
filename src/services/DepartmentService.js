import axios from "axios";

const DEPARTMENT_REST_API_BASE_URL = "http://localhost:8080/api/departments";

export const getAllDepartments = () => {
  return axios.get(DEPARTMENT_REST_API_BASE_URL);
};

export const createDepartment = (department) => {
  return axios.post(DEPARTMENT_REST_API_BASE_URL, department);
};

export const getDepartmentById = (id) => {
  return axios.get(`${DEPARTMENT_REST_API_BASE_URL}/${id}`);
};

export const updateDepartment = (id, department) => {
  return axios.put(`${DEPARTMENT_REST_API_BASE_URL}/${id}`, department);
};

export const deleteDepartment = (id) => {
  return axios.delete(`${DEPARTMENT_REST_API_BASE_URL}/${id}`);
};
