import React from "react";
import { Outlet } from "react-router-dom";
import StudentManagementNav from "./StudentManagementNav";

export default function StudentManagementAdmin() {
  return (
    <div id="StudentManagementAdmin">
      <StudentManagementNav />
      <Outlet />
    </div>
  );
}
