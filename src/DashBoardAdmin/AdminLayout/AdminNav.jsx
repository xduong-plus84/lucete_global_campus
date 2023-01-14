import React from "react";
import { NavLink } from "react-router-dom";

export default function AdminNav() {
  let activeStyle = {
    background: "rgb(239, 68, 68)",
    color: "white",
  };

  const navLinkStyle =
    "flex justify-center items-center w-1/12 font-semibold rounded hover:bg-red-500 hover:text-white duration-500";

  return (
    <div
      id="AdminNav"
      className="flex flex-wrap items-center sm:justify-center text-gray-800 mx-8 mt-8"
    >
      {/* admin -> role management  */}
      <NavLink
        to={"/dash-board-admin/role-management"}
        className={navLinkStyle}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <div className="flex items-center text-center h-12 text-sm">
          Role <br /> Management
        </div>
      </NavLink>
      {/* admin -> campus management  */}
      <NavLink
        to={"/dash-board-admin/campus-management"}
        className={navLinkStyle}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <div className="flex items-center text-center h-12 text-sm">
          Campus <br /> Management
        </div>
      </NavLink>
      {/* admin -> online class management  */}
      <NavLink
        to={"/dash-board-admin/online-class-management"}
        className={navLinkStyle}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <div className="flex items-center text-center h-12 text-sm">
          Online Class <br /> Management
        </div>
      </NavLink>
      {/* admin -> product management  */}
      <NavLink
        to={"/dash-board-admin/product-management"}
        className={navLinkStyle}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <div className="flex items-center justify-center text-center h-12 text-sm">
          Product <br /> Management
        </div>
      </NavLink>
      {/* admin -> study planner  */}
      <NavLink
        to={"/dash-board-admin/study-planner"}
        className={navLinkStyle}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <div className="flex items-center justify-center text-center h-12 text-sm">
          Study <br /> Planner
        </div>
      </NavLink>
      {/* admin -> student management  */}
      <NavLink
        to={"/dash-board-admin/student-management"}
        className={navLinkStyle}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <div className="flex items-center text-center h-12 text-sm">
          Student <br /> Management
        </div>
      </NavLink>
      {/* admin -> enrollment */}
      <NavLink
        to={"/dash-board-admin/enrollment"}
        className={navLinkStyle}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <div className="flex items-center text-center h-12 text-sm">
          Enrollment
        </div>
      </NavLink>
      {/* admin -> learning management  */}
      <NavLink
        to={"/dash-board-admin/learning-management"}
        className={navLinkStyle}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <div className="flex items-center text-center h-12 text-sm">
          Learning <br /> Management
        </div>
      </NavLink>
      {/* admin -> order management  */}
      <NavLink
        to={"/dash-board-admin/order-management"}
        className={navLinkStyle}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <div className="flex items-center text-center h-12 text-sm">
          Order <br /> Management
        </div>
      </NavLink>
      {/* admin -> teacher management  */}
      <NavLink
        to={"/dash-board-admin/teacher-management"}
        className={navLinkStyle}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <div className="flex items-center text-center h-12 text-sm">
          Teacher <br /> Management
        </div>
      </NavLink>
      {/* admin -> point management  */}
      <NavLink
        to={"/dash-board-admin/point-management"}
        className={navLinkStyle}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <div className="flex items-center text-center h-12 text-sm">
          Point <br /> Management
        </div>
      </NavLink>
      {/* admin -> archive */}
      <NavLink
        to={"/dash-board-admin/archive"}
        className={navLinkStyle}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <div className="flex items-center text-center h-12 text-sm">
          Archive
        </div>
      </NavLink>
    </div>
  );
}
