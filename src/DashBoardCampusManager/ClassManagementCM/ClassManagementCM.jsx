import React from "react";
import { Outlet } from "react-router-dom";
import ClassManagementNavCM from "./ClassManagementNavCM";

export default function ClassManagementCM() {
  return (
    <>
      <ClassManagementNavCM />
      <Outlet />
    </>
  );
}
