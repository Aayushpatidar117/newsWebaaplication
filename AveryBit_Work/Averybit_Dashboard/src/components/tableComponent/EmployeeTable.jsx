import React from "react";
import employees from "../../tableData";
import "./EmployeeTable.css";

const EmployeeTable = () => {
  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "Active":
        return "status-active";
      case "On Leave":
        return "status-leave";
      case "Remote":
        return "status-remote";
      default:
        return "";
    }
  };

  return (
    <div className="table-container">
      <table className="employee-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Position</th>
            <th>Performance</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>
                <div className="name-cell">
                  <div>{employee.name}</div>
                  <div className="email">{employee.email}</div>
                </div>
              </td>
              <td>{employee.department}</td>
              <td>{employee.position}</td>
              <td>
                <div className="performance-bar-container">
                  <div
                    className="performance-bar"
                    style={{ width: `${employee.performance}%` }}
                  ></div>
                  <span>{employee.performance}%</span>
                </div>
              </td>
              <td>
                <span
                  className={`status-badge ${getStatusBadgeClass(
                    employee.status
                  )}`}
                >
                  {employee.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
