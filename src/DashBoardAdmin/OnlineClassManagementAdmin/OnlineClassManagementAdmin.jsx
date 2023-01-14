import React from "react";
import { Outlet } from "react-router-dom";
import OnlineClassManagementNav from "./OnlineClassManagementNav";

export default function OnlineClassManagementAdmin() {
  return (
    <>
      <OnlineClassManagementNav />
      <Outlet />
    </>
  );
}
