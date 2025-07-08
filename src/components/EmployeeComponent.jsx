import React, {useState } from 'react'
import { createEmployee } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const EmployeeComponent = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const navigator = useNavigate();
    
    const saveEmployee = (e) => {
        e.preventDefault();
        
        const employee = { firstName, lastName, email };
        console.log("Saving employee:", employee);

        createEmployee(employee).then((response) => {
          console.log("Employee created successfully", response.data);
          navigator('/employees'); // Redirect to the employees list after successful creation
        })
    };    

  return (
    <div className='container'>
      <br /> <br /> 
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
            <h3 className='text-center'>Add Employee</h3>
            <div className='card-body'>
                <form>
                <div className='form-group mb-2'>
                    <label className='form-label'>First Name:</label>
                    <input
                    type='text'
                    placeholder='Enter Employee First Name'
                    name='firstName'
                    className='form-control'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>

                <div className='form-group mb-2'>
                    <label className='form-label'>Last Name:</label>
                    <input
                    type='text'
                    placeholder='Enter Employee Last Name'
                    name='lastName'
                    className='form-control'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className='form-group mb-2'>
                    <label className='form-label'>Email:</label>
                    <input
                    type='text'
                    placeholder='Enter Employee Email'
                    name='email'
                    className='form-control'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <button className='btn btn-success' onClick={saveEmployee}>Submit</button>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeComponent
