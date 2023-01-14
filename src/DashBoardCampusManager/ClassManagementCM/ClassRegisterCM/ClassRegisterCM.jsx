import React from "react";
import ClassRegisterList from "./ClassRegisterList/ClassRegisterList";
import ClassRegisterTimeTable from "./ClassRegisterTimeTable/ClassRegisterTimeTable";

export default function ClassRegisterCM() {
  return (
    <div id="ClassRegisterCM">
      <ClassRegisterTimeTable />
      <ClassRegisterList />
    </div>
  );
}
