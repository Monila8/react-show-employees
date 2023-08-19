import React from 'react';
import Employee from "./Employees"

function App() {
  const employee = [
    {
      id: 123,
      name: "Foo Perez",
      position: "Manager",
      salary: 100000,
    },
    {
      id: 1234,
      name: "Foo Castro",
      position: "CEO",
      salary: 200000,
    },
  ]

  return (
    <div>
      <h1>Employee details:</h1>
      {employee.map((employee) => (
        <Employee
          key={employee.id}
          id={employee.id}
          name={employee.name}
          position={employee.position}
          salary={employee.salary}
        />
      ))}
    </div>
  )
}

export default App
