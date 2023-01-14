import { Tabs } from "antd";
import React from "react";
import WorldChat from "../../Pages/WorldChat/WorldChat";
import StudentActivityHistory from "./StudentActivityHistory/StudentActivityHistory";
import StudentClassManagement from "./StudentClassManagement/StudentClassManagement";
import StudentLearningMaterial from "./StudentLearningMaterial/StudentLearningMaterial";
import StudentReward from "./StudentReward/StudentReward";
import StudentStudyPlanner from "./StudentStudyPlanner/StudentStudyPlanner";
import StudentTimeTable from "./StudentTimeTable/StudentTimeTable";

export default function StudentManagement() {
  const items = [
    {
      label: "Class Management",
      key: "class-management",
      children: <StudentClassManagement />,
    },
    {
      label: "Study Planner",
      key: "my-planner",
      children: <StudentStudyPlanner />,
    },
    {
      label: "Learning Material",
      key: "learning-material",
      children: <StudentLearningMaterial />,
    },
    {
      label: "Activity History",
      key: "activity-history",
      children: <StudentActivityHistory />,
    },
    {
      label: "Reward",
      key: "reward",
      children: <StudentReward />,
    },
    {
      label: "Timetable",
      key: "time-table",
      children: <StudentTimeTable />,
    },
    {
      label: "World Chat",
      key: "world-chat",
      children: <WorldChat />,
    },
  ];

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div className="w-full">
      <Tabs
        defaultActiveKey="1"
        onChange={onChange}
        items={items}
        className="w-full"
      />
    </div>
  );
}
