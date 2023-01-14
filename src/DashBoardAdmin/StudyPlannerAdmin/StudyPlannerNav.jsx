import React from "react";
import { NavLink } from "react-router-dom";

export default function StudyPlannerNav() {
  let activeStyle = {
    background: "rgb(59, 130, 246)",
    color: "white",
  };

  const navLinkStyle =
    "flex justify-center items-center w-1/12 font-semibold rounded hover:bg-blue-500 hover:text-white duration-500";

  return (
    <div
      id="StudyPlannerNav"
      className="flex flex-wrap items-center sm:justify-start text-gray-800 mt-4"
    >
      <NavLink
        to={"/dash-board-admin/study-planner/activity-management"}
        className={navLinkStyle}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <div className="flex items-center text-center h-12 text-sm">
          Activity Management
        </div>
      </NavLink>
      <NavLink
        to={"/dash-board-admin/study-planner/planner-arrangement"}
        className={navLinkStyle}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <div className="flex items-center text-center h-12 text-sm">
          Planner Arrangement
        </div>
      </NavLink>
    </div>
  );
}
