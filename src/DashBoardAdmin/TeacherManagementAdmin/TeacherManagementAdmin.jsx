import React from "react";
import { Outlet } from "react-router-dom";
import TeacherManagementNav from "./TeacherManagementNav";

export default function TeacherManagementAdmin() {
  return (
    <div id="TeacherManagementAdmin">
      <TeacherManagementNav />
      <Outlet />
    </div>
  );
}
