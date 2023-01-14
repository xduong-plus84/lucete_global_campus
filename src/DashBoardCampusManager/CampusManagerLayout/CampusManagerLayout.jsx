import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Layout/Header/Header";
import CampusManagerNav from "./CampusManagerNav";

export default function CampusManagerLayout() {
  return (
    <div id="CampusManagerLayout" className="h-screen">
      <Header />
      <CampusManagerNav />
      <div className="p-8">
        <Outlet />
      </div>
    </div>
  );
}
