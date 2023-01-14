import DashBoardParents from "../DashBoardParents/DashBoardParents";
import Layout from "../Layout/Layout";

export const routesParent = [
  {
    path: "/dash-board-parents",
    children: [
      {
        path: ":maPhuHuynh",
        element: <Layout Component={DashBoardParents} />,
      },
    ],
  },
];
