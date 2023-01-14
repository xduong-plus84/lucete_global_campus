import React from "react";
import { Outlet } from "react-router-dom";
import LearningManagementNav from "./LearningManagementNav";

export default function LearningManagementAdmin() {
  return (
    <div id="LearningManagementAdmin">
      <LearningManagementNav />
      <Outlet />
    </div>
  );
}
