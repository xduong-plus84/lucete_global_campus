import { Avatar, Input, Progress } from "antd";
import React from "react";

import {
  EditOutlined,
  UserOutlined,
  MailFilled,
  PhoneFilled,
  SketchOutlined,
  EnvironmentOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { NavLink, useParams } from "react-router-dom";
import { serviceLocalStorageUser } from "../../util/demoLocalStorage/demoLocalStorage";
import StudentNotification from "./StudentNotification/StudentNotification";

export default function StudentInfo() {
  let userInfor = serviceLocalStorageUser.user.get();

  let { maHocSinh } = useParams();
  console.log("maHocSinh: ", maHocSinh);
  // console.log("tenCongViec: ", tenCongViec);
  return (
    <div className="p-4 border-r-2 w-64 mr-2">
      <div className="headerAvatar flex flex-col items-center justify-center">
        <div className="relative">
          <Avatar
            size={100}
            style={{
              color: "#f56a00",
              backgroundColor: "#fde3cf",
              fontSize: 50,
            }}
          >
            {maHocSinh}
          </Avatar>
          {userInfor.role == "parents" ? (
            <NavLink
              to={`/dash-board-parents/${userInfor.ma}`}
              className="text-red-500 text-2xl absolute -top-5 -right-5"
            >
              <i className="fa fa-backspace" />
            </NavLink>
          ) : (
            <></>
          )}
        </div>

        <div className="text-xl flex items-center justify-center mt-2">
          <p>{maHocSinh}</p>
          <button className="text-gray-500 hover:text-gray-700 ml-1">
            <EditOutlined className="text-2xl" />
          </button>
        </div>
        <Progress percent={90} status="active" className="m-0" />
        {/* <Progress percent={100} status="success" className="m-0" /> */}
      </div>

      <Input placeholder="NHẬP MÃ CODE" className="mt-1" size="small" />

      <div className="grid grid-cols-1 my-2">
        <div className="flex items-center py-1">
          <UserOutlined />
          <span className="ml-2">King</span>
        </div>
        <div className="flex items-center py-1">
          <SketchOutlined />
          <span className="ml-2">Diamond</span>
        </div>
        <div className="flex items-center border-b-2">
          <StarOutlined />
          <span className=" ml-2">1,000</span>
        </div>
        <h1 className="text-center font-bold text-white p-2 bg-red-500 rounded-t-md">
          Announcements
        </h1>
        <div className="overflow-y-scroll" style={{ height: 300 }}>
          <StudentNotification />
        </div>

        <div className="flex items-center py-1 border-t-2 mt-16">
          <MailFilled />
          <span className=" ml-2">duong@gmail.com</span>
        </div>
        <div className="flex items-center py-1">
          <PhoneFilled />
          <span className="ml-2">0385688579</span>
        </div>
        <div className="flex items-center py-1">
          <EnvironmentOutlined />
          <span className="ml-2">HCM City, Viet Nam</span>
        </div>
      </div>

      {/* <Modal
              zIndex={45}
              centered
                open={modalOpen.isOpen}
                onOk={handleOk}
                onCancel={handleCancel}
              footer={null}
            >
              <TrangSuaUser infoUser={info} />
            </Modal> */}
      {/* </Card> */}
    </div>
  );
}
