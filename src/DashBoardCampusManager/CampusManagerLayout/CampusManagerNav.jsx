import React from "react";
import { NavLink } from "react-router-dom";

export default function CampusManagerNav() {
  let activeStyle = {
    background: "rgb(239, 68, 68)",
    color: "white",
  };

  const navLinkStyle =
    "flex justify-center items-center w-1/12 font-semibold rounded hover:bg-red-500 hover:text-white duration-500";

  return (
    <div
      id="CampusManagerNav"
      className="flex flex-wrap items-center sm:justify-center text-gray-800 mx-8 mt-8"
    >
      {/* campus management -> Role management */}
      <NavLink
        to={"/campus-manager/role-management"}
        className={navLinkStyle}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <div className="flex items-center text-center h-12 text-sm">
          Role <br /> Management
        </div>
      </NavLink>
      {/* campus management -> Class management */}
      <NavLink
        to={"/campus-manager/class-management"}
        className={navLinkStyle}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <div className="flex items-center text-center h-12 text-sm">
          Class <br /> Management
        </div>
      </NavLink>
      {/* campus management -> student management */}
      <NavLink
        to={"/campus-manager/student-management"}
        className={navLinkStyle}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <div className="flex items-center text-center h-12 text-sm">
          Student <br /> Management
        </div>
      </NavLink>
      {/* campus management -> Enrollment */}
      <NavLink
        to={"/campus-manager/enrollment"}
        className={navLinkStyle}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <div className="flex items-center text-center h-12 text-sm">
          Enrollment
        </div>
      </NavLink>
      {/* campus management -> Learning management  */}
      <NavLink
        to={"/campus-manager/learning-management"}
        className={navLinkStyle}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <div className="flex items-center text-center h-12 text-sm">
          Learning <br /> Management
        </div>
      </NavLink>
      {/* campus management -> Study planner  */}
      <NavLink
        to={"/campus-manager/study-planner"}
        className={navLinkStyle}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <div className="flex items-center text-center h-12 text-sm">
          Study <br /> Planner
        </div>
      </NavLink>
      {/* campus management -> order management  */}
      <NavLink
        to={"/campus-manager/order-management"}
        className={navLinkStyle}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <div className="flex items-center text-center h-12 text-sm">
          Order <br /> Management
        </div>
      </NavLink>
      {/* campus management -> point management  */}
      <NavLink
        to={"/campus-manager/point-management"}
        className={navLinkStyle}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <div className="flex items-center text-center h-12 text-sm">
          Point <br /> Management
        </div>
      </NavLink>
      {/* campus management -> archive */}
      <NavLink
        to={"/campus-manager/archive"}
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
