import DashBoardStudent from "../DashBoardStudent/DashBoardStudent";
import Layout from "../Layout/Layout";

export const routesStudent = [
  {
    path: "/dash-board-student",
    children: [
      {
        path: ":maHocSinh",
        element: <Layout Component={DashBoardStudent} />,
      },
    ],
  },
];
