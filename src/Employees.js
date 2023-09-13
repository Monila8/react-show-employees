import React, { useState } from "react"
import "./Employee.css"

function Employee({ id, name, position, salary, outstanding, toggleOutstanding, incrementPosition, updatePosition }) {
    const [newPosition, setNewPosition] = useState("")

  const changePosition = () => {
  updatePosition(newPosition)
  setNewPosition("")
  incrementPosition()
  }
 
//   return (
//     <div>
//       <p1 className="info">
//         ID: {props.id}, Name: {props.name}, Position: {position}, Salary: ${props.salary}     
//   
  return (
    <div className={`employee-container ${outstanding ? "Outstanding" : ""}`}>
      <h3>Employee {id}</h3>
      <div className="employee-data">
        <div>Name: {name}</div>
        <div>Position: {position}</div>
        <div>Salary: {salary}</div>
      </div>
      <input
        type="text"
        value={newPosition}
        onChange={(event) => setNewPosition(event.target.value)}
        placeholder="Write new position"
      />
      <button
        className="button"
        onClick={changePosition}>
        Change position
      </button>

      <button onClick={() => toggleOutstanding(id)}>
        {outstanding ? "Delete outstanding" : "Stand out"}
      </button>
    </div>
  )
}


export default Employee
