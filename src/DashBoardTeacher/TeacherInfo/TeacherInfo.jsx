import { Avatar } from "antd";
import React from "react";

import { EditOutlined } from "@ant-design/icons";
import { serviceLocalStorageUser } from "../../util/demoLocalStorage/demoLocalStorage";
import { NavLink, useParams } from "react-router-dom";

export default function TeacherInfo() {
  let userInfor = serviceLocalStorageUser.user.get();
  console.log("userInfor: ", userInfor);

  let { maGiaoVien } = useParams();
  console.log("maGiaoVien: ", maGiaoVien);
  return (
    <div className="m-4 p-5 border-r-2 w-64">
      <div className="headerAvatar flex flex-col items-center justify-center">
        <div className="relative">
          <Avatar
            size={120}
            style={{
              color: "#f56a00",
              backgroundColor: "#fde3cf",
              fontSize: 50,
            }}
          >
            {maGiaoVien}
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
          <p>{maGiaoVien}</p>
          <button className="text-gray-500 hover:text-gray-700 ml-1">
            <EditOutlined className="text-2xl" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 border-t-2 my-6">
        <div className="flex items-center py-1 mt-4">
          <i className="fa fa-star"></i>
          <span className=" ml-2">1,000</span>
        </div>
        <div className="flex items-center py-1">
          <i className="fa fa-crown"></i>
          <span className="ml-2">Offline</span>
        </div>

        <div className="flex items-center py-1 border-t-2 pt-4 mt-4">
          <i className="fa fa-envelope"></i>
          <span className=" ml-2">duong@gmail.com</span>
        </div>
        <div className="flex items-center py-1">
          <i className="fa fa-phone"></i>
          <span className="ml-2">0385688579</span>
        </div>
        <div className="flex items-center py-1">
          <i className="fa fa-map-marker-alt"></i>
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
