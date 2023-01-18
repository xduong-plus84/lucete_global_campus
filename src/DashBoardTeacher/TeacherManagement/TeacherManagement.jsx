import { Tabs } from "antd";
import React from "react";
import ActivityHistoryTeacher from "./ActivityHistoryTeacher/ActivityHistoryTeacher";
import ClassManagementTeacher from "./ClassManagementTeacher/ClassManagementTeacher";
import DailyReport from "./DailyReport/DailyReport";
import SalaryCalculatorTeacher from "./SalaryCalculatorTeacher/SalaryCalculatorTeacher";
import StudyPlannerTeacher from "./StudyPlannerTeacher/StudyPlannerTeacher";
import TeachingMaterial from "./TeachingMaterial/TeachingMaterial";
import TeacherReward from "./TeacherReward/TeacherReward";
import WorldChat from "../../Pages/WorldChat/WorldChat";
import { serviceLocalStorageUser } from "../../util/demoLocalStorage/demoLocalStorage";
import PointManagement from "./PointManagement/PointManagement";

export default function TeacherManagement() {
  let userInfor = serviceLocalStorageUser.user.get();
  const isTeacher = userInfor.role == "teacher";
  console.log("isTeacher: ", isTeacher);
  const items = [
    {
      label: "Class Management",
      key: "class-management",
      children: <ClassManagementTeacher />,
      disabled: !isTeacher,
    },
    {
      label: "Study Planner",
      key: "study-planner",
      children: <StudyPlannerTeacher />,
      disabled: !isTeacher,
    },
    {
      label: "Teaching Material",
      key: "teaching-material",
      children: <TeachingMaterial />,
      disabled: !isTeacher,
    },
    {
      label: "Activity History",
      key: "activity-history",
      children: <ActivityHistoryTeacher />,
      disabled: !isTeacher,
    },
    {
      label: "Daily Report",
      key: "daily-report",
      children: <DailyReport />,
      disabled: !isTeacher,
    },
    {
      label: "Salary Calculator",
      key: "salary-calculator",
      children: <SalaryCalculatorTeacher />,
      disabled: !isTeacher,
    },
    {
      label: "Reward",
      key: "reward",
      children: <TeacherReward />,
      disabled: !isTeacher,
    },
    {
      label: "World Chat",
      key: "world-chat",
      children: <WorldChat />,
      disabled: !isTeacher,
    },
    {
      label: "Poin Management",
      key: "point-management",
      children: <PointManagement />,
      disabled: !isTeacher,
    },
  ];

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div className="w-full">
      {/* <div> */}
      <Tabs
        defaultActiveKey="1"
        onChange={onChange}
        items={items}
        className="w-full"
      />
    </div>
  );
}
