import React, { useEffect, useState } from 'react'
import { getAllDepartments, deleteDepartment } from '../services/DepartmentService';
import { Link, useNavigate } from 'react-router-dom';

const ListDepartmentComponent = () => {
    

    const [departments, setDepartments] = useState([]);

    const navigator = useNavigate();

    useEffect(() => {
       listOfDepartments(); 
    }, []);


    const listOfDepartments = () => {
        getAllDepartments().then((response) => {
            setDepartments(response.data);
        }).catch((error) => {
            console.error("There was an error fetching the departments!", error);
        });
    };

    const updateDepartment = (id) => {
        navigator(`/edit-department/${id}`);
    };

    const removeDepartment = (id) => {
        deleteDepartment(id).then(() => {
          listOfDepartments(); // Refresh the list after deletion  
        }).catch((error) => {
          console.error("There was an error deleting the department!", error);
        });
    };

  return (
    <div className='container'>
      <h2 className='text-center'>List of Departments</h2>
      <Link to="/add-department" className='btn btn-primary mb-2'>Add Department</Link>
      <table className='table table-striped table-bordered'>
        <thead>
            <tr>
                <th>Department ID</th>
                <th>Department Name</th>
                <th>Department Description</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {departments.map(department => (
                <tr key={department.id}>
                    <td>{department.id}</td>
                    <td>{department.departmentName}</td>
                    <td>{department.departmentDescription}</td>
                    <td><button onClick={() => updateDepartment(department.id)} className='btn btn-info'>Update</button>
                        <button onClick={() => removeDepartment(department.id)} className='btn btn-danger' style={{marginLeft: "10"}}>Delete</button>
                    </td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default ListDepartmentComponent
