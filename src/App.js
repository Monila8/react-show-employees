import React, { useState } from "react"
import Employee from "./Employees"

function App() {
  const [employeeCount, setEmployeeCount] = useState(0)
  const [positionChangeCount, setPositionChangeCount] = useState(0)
  const [employeeList, setEmployeeList] = useState([])

  const incrementEmployeeCount = () => {
    setEmployeeCount(employeeCount + 1)
  }

  const incrementPosition = () => { // Cambio el nombre aquí
    setPositionChangeCount(positionChangeCount + 1)
  }

  const toggleOutstanding = (index) => {
    const updatedEmployeeList = [...employeeList]
    updatedEmployeeList[index].outstanding = !updatedEmployeeList[index].outstanding
    setEmployeeList(updatedEmployeeList)
  }

  const addEmployee = (employee) => {
    setEmployeeList([...employeeList, employee])
    incrementEmployeeCount()
  }

  return (
    <div>
      <h1>Employee details:</h1>
      <p>Employee count: {employeeCount}</p>
      <p>Position change count: {positionChangeCount}</p>
      <button
        onClick={() =>
          addEmployee({
            id: employeeCount + 1,
            name: "Fulanito",
            position: "CEO",
            salary: 50000,
            outstanding: false,
          })
        }>
        Add employee
      </button>
      {employeeList.map((employee, index) => (
        <Employee
          key={index}
          id={employee.id}
          name={employee.name}
          position={employee.position}
          salary={employee.salary}
          outstanding={employee.outstanding}
          incrementPosition={incrementPosition}
          toggleOutstanding={() => toggleOutstanding(index)}
          updatePosition={(newPosition) => {
            const updatedEmployeeList = [...employeeList]
            updatedEmployeeList[index].position = newPosition
            setEmployeeList(updatedEmployeeList)
          }}
        />
      ))}
    </div>
  )
}
 export default App;