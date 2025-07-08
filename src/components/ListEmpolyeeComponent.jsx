import React, {useEffect, useState} from 'react';
import { listEmployees } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';


const ListEmpolyeeComponent = () => {
   
  const [employees, setEmployees] = useState([]);

  const navigator = useNavigate();

  useEffect(() => {
    listEmployees().then((response) => {
      setEmployees(response.data);
    }).catch((error) => {
      console.error("Error fetching employees:", error);
    });
  }, []);
  
  const addNewEmployee = () => {
    // Logic to add a new employee can be implemented here
    navigator('/add-employee');
  };

  const updateEmployee = (id) => {
    // Logic to update an employee can be implemented here
    navigator(`/edit-employee/${id}`);
  };

  return (
    <div className='container'>
      <h2 className="text-center">Employees List</h2>
      <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>
                <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ListEmpolyeeComponent

