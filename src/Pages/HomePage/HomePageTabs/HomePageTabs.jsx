import React from "react";
import { Tabs } from "antd";
import ThongTinLopHoc from "./ThongTinLopHoc/ThongTinLopHoc";
import BanDoTheGioi from "./BanDoTheGioi/BanDoTheGioi";
import ReviewHocSinh from "./ReviewHocSinh/ReviewHocSinh";

// css
import "./homePageTabs.css";
import Pagination from "../../../Components/Pagination/Pagination";

export default function HomePageTabs() {
  const items = [
    {
      label: "Classroom",
      key: "ThongTinLopHoc",
      children: <ThongTinLopHoc />,
    },
    {
      label: "World Map",
      key: "BanDoTheGioi",
      children: <BanDoTheGioi />,
    },
    {
      label: "Reviews",
      key: "ReviewHocSinh",
      children: <ReviewHocSinh />,
    },
  ];

  return (
    <div
      id="homePageTabs"
      className="container max-w-screen-xl mx-auto my-5 bg-gray-100"
    >
      <Tabs items={items} centered />
    </div>
  );
}
