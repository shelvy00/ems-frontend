import React, {useEffect, useState } from 'react'
import { createEmployee, getEmployee,updateEmployee } from '../services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';

const EmployeeComponent = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const { id } = useParams(); // Get the employee ID from the URL parameters if editing

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });

    const navigator = useNavigate();

    // If an ID is present, fetch the employee data to pre-fill the form
    // This is useful for editing an existing employee
    // If no ID is present, it will be treated as a new employee creation
    // This useEffect will run when the component mounts or when the ID changes
    useEffect(() => {
        if (id) {
            getEmployee(id).then((response) => {
                const employee = response.data;
                setFirstName(employee.firstName);
                setLastName(employee.lastName);
                setEmail(employee.email);
            }).catch((error) => {
                console.error("Error fetching employee data:", error);
            });
        }
    }, [id]);


    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();

        if(validateForm()) {
         const employee = { firstName, lastName, email };
         console.log("Saving employee:", employee);

        if (id) {
          // If an ID is present, update the existing employee
          updateEmployee(id, employee).then((response) => {
            console.log("Employee updated successfully", response.data);
            navigator('/employees'); // Redirect to the employees list after successful update
          }).catch((error) => {
            console.error("Error updating employee:", error);
          });
        }else {
          // If no ID is present, create a new employee
          createEmployee(employee).then((response) => {
           console.log("Employee created successfully", response.data);
           navigator('/employees'); // Redirect to the employees list after successful creation
         }).catch((error) => {  
           console.error("Error creating employee:", error);
         });
        };
      };      
    };
    
    const validateForm = () => {
        let valid = true;

        const errorsCopy = {...errors}

        if (firstName.trim()) {
            errorsCopy.firstName = "";
        } else {
            errorsCopy.firstName = "First name is required";
            valid = false;
        };

        if (lastName.trim()) {
            errorsCopy.lastName = "";
        } else {
            errorsCopy.lastName = "Last name is required";
            valid = false;
        };

        if (email.trim()) {
            errorsCopy.email = "";
        }else {
            errorsCopy.email = "Email is required";
            valid = false;
        };

        setErrors(errorsCopy);
        return valid;
    };

    const pageTitle = id ? <h2 className='text-center'>Update Employee</h2> : <h2 className='text-center'>Add Employee</h2>;


  return (
    <div className='container'>
      <br /> <br /> 
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
            {pageTitle}
            <div className='card-body'>
                <form>
                <div className='form-group mb-2'>
                    <label className='form-label'>First Name:</label>
                    <input
                    type='text'
                    placeholder='Enter Employee First Name'
                    name='firstName'
                    className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    />
                    {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                </div>

                <div className='form-group mb-2'>
                    <label className='form-label'>Last Name:</label>
                    <input
                    type='text'
                    placeholder='Enter Employee Last Name'
                    name='lastName'
                    className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    />
                    {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
                </div>
                <div className='form-group mb-2'>
                    <label className='form-label'>Email:</label>
                    <input
                    type='text'
                    placeholder='Enter Employee Email'
                    name='email'
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                </div>

                <button className='btn btn-success' onClick={saveOrUpdateEmployee}>Submit</button>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeComponent
