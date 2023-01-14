import React from "react";
import TeacherInfo from "./TeacherInfo/TeacherInfo";
import TeacherManagement from "./TeacherManagement/TeacherManagement";

export default function DashBoardTeacher() {
  return (
    <div className="container flex mx-auto">
      <TeacherInfo />
      <TeacherManagement />
    </div>
  );
}
