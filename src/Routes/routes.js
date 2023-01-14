import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import HomePage from "../Pages/HomePage/HomePage";
import PageLogin from "../Pages/LoginSystem/PageLogin/PageLogin";
import PageRegistration from "../Pages/LoginSystem/PageRegistration/PageRegistration";
import DemoUI from "../util/DemoUI";
import { routesAdmin } from "./routesAdmin";
import { routesCampusManagement } from "./routesCampusManager";
import { routesParent } from "./routesParent";
import { routesStudent } from "./routesStudent";
import { routesTeacher } from "./routesTeacher";

const routesDefault = [
  {
    path: "/",
    element: <Layout Component={HomePage} />,
  },
  {
    path: "/login",
    element: <PageLogin />,
  },
  {
    path: "/registration",
    element: <PageRegistration />,
  },
  {
    path: "*",
    element: <DemoUI />,
  },
];

export const router = createBrowserRouter(
  routesDefault.concat(
    routesStudent,
    routesParent,
    routesTeacher,
    routesAdmin,
    routesCampusManagement
  )
);
