import React from "react";
import { Outlet } from "react-router-dom";
import StudyPlannerNav from "./StudyPlannerNav";

export default function StudyPlannerAdmin() {
  return (
    <div id="StudyPlannerAdmin">
      <StudyPlannerNav />
      <Outlet />
    </div>
  );
}
