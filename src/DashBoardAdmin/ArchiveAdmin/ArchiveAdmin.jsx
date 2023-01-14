import React from "react";
import { Outlet } from "react-router-dom";
import ArchiveNav from "./ArchiveNav";

export default function ArchiveAdmin() {
  return (
    <div id="ArchiveAdmin">
      <ArchiveNav />
      <Outlet />
    </div>
  );
}
