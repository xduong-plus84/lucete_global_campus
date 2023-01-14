import React from "react";
import StudentInfo from "./StudentInfo/StudentInfo";
import StudentManagement from "./StudentManagement/StudentManagement";

export default function DashBoardStudent() {
  return (
    <div className="container flex mx-auto">
      <StudentInfo />
      <StudentManagement />
    </div>
  );
}
