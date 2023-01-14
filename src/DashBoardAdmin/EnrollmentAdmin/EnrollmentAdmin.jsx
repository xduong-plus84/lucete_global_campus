import React from "react";
import { Outlet } from "react-router-dom";
import EnrollmentNav from "./EnrollmentNav";

export default function EnrollmentAdmin() {
  return (
    <div id="EnrollmentAdmin">
      <EnrollmentNav />
      <Outlet />
    </div>
  );
}
