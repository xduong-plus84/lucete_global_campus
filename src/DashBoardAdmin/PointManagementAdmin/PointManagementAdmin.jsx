import React from "react";
import { Outlet } from "react-router-dom";
import PointManagementNav from "./PointManagementNav";

export default function PointManagementAdmin() {
  return (
    <div id="PointManagementAdmin">
      <PointManagementNav />
      <Outlet />
    </div>
  );
}
