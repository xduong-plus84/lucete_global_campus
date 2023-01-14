import React from "react";
import ParentsInfo from "./ParentsInfo/ParentsInfo";
import ParentsManagement from "./ParentsManagement/ParentsManagement";

export default function DashBoardParents() {
  return (
    <div className="container flex mx-auto">
      <ParentsInfo />
      <ParentsManagement />
    </div>
  );
}
