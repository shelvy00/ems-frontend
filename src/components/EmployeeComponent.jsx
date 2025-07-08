import React, {useState } from 'react'

const EmployeeComponent = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    
    const saveEmployee = (e) => {
        e.preventDefault();
        const employee = { firstName, lastName, email };
    }    

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

                <button className='btn btn-success' onChange={saveEmployee}>Submit</button>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeComponent
