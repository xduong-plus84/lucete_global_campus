import { Alert } from "antd";
import React from "react";

export default function SalaryCalculatorTeacher() {
  return (
    <div>
      <Alert
        message={
          <p>
            <span style={{ fontWeight: "bold" }}>Salary Rate: </span>
            <span style={{ color: "red", fontSize: "1.5rem" }}>1</span> student
            = <span style={{ color: "red", fontSize: "1.5rem" }}>2</span> $/day
          </p>
        }
        type="success"
      />
      <div style={{ margin: "50px 0" }}>
        <p>
          Lương tuần:
          <span style={{ color: "red", fontSize: "1.5rem", margin: "0 5px" }}>
            50$
          </span>
        </p>
        <p>
          Lương tháng:
          <span style={{ color: "red", fontSize: "1.5rem", margin: "0 5px" }}>
            100$
          </span>
        </p>
      </div>
    </div>
  );
}
