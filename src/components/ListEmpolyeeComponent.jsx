import React from 'react'


const ListEmpolyeeComponent = () => {

  const dummyData = [{
    "id": 1,
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@gmail.com",
},
{
    "id": 2,
    "firstName": "Jane",
    "lastName": "Doe",
    "email": "jane@gmail.com"
}
];  

  return (
    <div>
      <h2 className="text-center">Employees List</h2>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email ID</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map(employee => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ListEmpolyeeComponent

