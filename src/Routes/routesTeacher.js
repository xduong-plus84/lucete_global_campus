import DashBoardTeacher from "../DashBoardTeacher/DashBoardTeacher";
import Layout from "../Layout/Layout";

export const routesTeacher = [
  {
    path: "/dash-board-teacher/:maGiaoVien",
    element: <Layout Component={DashBoardTeacher} />,
  },
];
