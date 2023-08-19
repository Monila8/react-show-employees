import React from "react";

function Employee (props) {
  return (
    <div>
      <p1>
        {props.id}, {props.name}, {props.position}, Salary: ${props.salary}
      </p1>
    </div>
  )
}

export default Employee;
