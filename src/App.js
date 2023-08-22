import React, { useState } from "react"
import Employee from "./Employees"

function App() {
  const [employeeCount, setEmployeeCount] = useState(0)

  const incrementEmployeeCount = () => {
    setEmployeeCount(employeeCount + 1)
  }

  const employeeList = [
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
      <p>Position change counter: {employeeCount}</p>
      {employeeList.map((employee) => (
        <Employee
          key={employee.id}
          id={employee.id}
          name={employee.name}
          position={employee.position}
          salary={employee.salary}
          incrementEmployeeCount={incrementEmployeeCount}
        />
      ))}
    </div>
  )
}

export default App
