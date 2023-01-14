import { Button, Modal, Space } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  ClockCircleOutlined,
  ExclamationCircleFilled,
} from "@ant-design/icons";
import {
  checkInAction,
  checkOutAction,
} from "../../../redux/actions/actionActivityHistory";
import {
  setCloseModalReviewAction,
  setOpenModalReviewAction,
} from "../../../redux/actions/actionModalReviewTeacher";
import { serviceLocalStorageUser } from "../../../util/demoLocalStorage/demoLocalStorage";

export default function ClassManagementTeacher() {
  let userInfor = serviceLocalStorageUser.user.get();
  const isTeacher = userInfor.role == "teacher";
  console.log("isTeacher: ", isTeacher);

  const dispatch = useDispatch();
  const [curDT, setCurDT] = useState();
  const [isCheckOut, setIsCheckOut] = useState(false);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  let isOpenModal = useSelector(
    (state) => state.reducerModalReviewTeacher.isOpenModal
  );
  console.log("isOpenModal: ", isOpenModal);
  useEffect(() => {
    // setInterval(() => {
    let time = new Date()
      .toLocaleTimeString()
      .replace("/.*(d{2}:d{2}:d{2}).*/", "$1");
    setCurDT(time);
    // }, 1000);
  }, []);

  const handleCheckIn = () => {
    console.log("checkin");
    dispatch(checkInAction());
  };

  const handleCheckOut = () => {
    setIsCheckOut(true);
    console.log("checkout");

    dispatch(setOpenModalReviewAction());
    dispatch(checkOutAction());
  };

  const handleCloseModal = () => {
    console.log("close modal");
    dispatch(setCloseModalReviewAction());
  };

  return (
    <>
      <div className="current-class flex items-center py-2 border-b-2 border-black">
        <div className="flex flex-col justify-center">
          <img src="/imgs/gems/gem7.png" className="w-16 h-16" alt="" />
          <span className="text-center mt-2">E6-Malachite</span>
        </div>
        <div className="grid grid-cols-1 divide-y ml-8">
          <Space className="my-2">
            <span className="p-1 font-semibold border rounded bg-slate-100">
              <span className="text-green-500">04-05-22</span>
              <span> ~ </span>
              <span className="text-red-500">19:30</span>
            </span>
            <Button
              type="primary"
              danger
              disabled={isCheckOut || !isTeacher}
              onClick={handleCheckOut}
            >
              {!isCheckOut ? "Check Out" : "Checked out"}
            </Button>
          </Space>

          <Space className="py-2" wrap>
            <a
              href="https://www.youtube.com/watch?v=tR2kj9MLVkU&ab_channel=VTVTh%E1%BB%83Thao"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Button onClick={handleCheckIn} disabled={!isTeacher}>
                Server 1
              </Button>
            </a>
            <a
              href="https://www.youtube.com/watch?v=tR2kj9MLVkU&ab_channel=VTVTh%E1%BB%83Thao"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Button onClick={handleCheckIn} disabled>
                Server 2
              </Button>
            </a>
            <a
              href="https://www.youtube.com/watch?v=tR2kj9MLVkU&ab_channel=VTVTh%E1%BB%83Thao"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Button onClick={handleCheckIn} disabled>
                Server 3
              </Button>
            </a>
            <a
              href="https://www.youtube.com/watch?v=tR2kj9MLVkU&ab_channel=VTVTh%E1%BB%83Thao"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Button onClick={handleCheckIn} disabled>
                Server 4
              </Button>
            </a>
          </Space>
        </div>
        <div className="ml-8 flex items-center">
          <ClockCircleOutlined className="mx-2" />
          <div className="text-red-500 text-xl font-bold">{curDT}</div>
        </div>
      </div>
      <div className="current-class flex items-center py-4 border-b-2 border-black">
        <div className="flex flex-col justify-center">
          <img src="/imgs/gems/gem8.png" className="w-16 h-16" alt="" />
          <span className="text-center mt-2">E7-Sunstone</span>
        </div>
        <div className="grid grid-cols-1 divide-y ml-8">
          <Space className="my-2">
            <span className="p-1 font-semibold border rounded bg-slate-100">
              <span className="text-green-500">01-12-22</span>
              <span> ~ </span>
              <span className="text-red-500">19:30</span>
            </span>
            <Button
              type="primary"
              danger
              // disabled={isCheckOut}
              disabled={true}
              onClick={handleCheckOut}
            >
              {!isCheckOut ? "Check Out" : "Checked out"}
            </Button>
          </Space>

          <Space className="py-2" wrap>
            <a
              href="https://www.youtube.com/watch?v=tR2kj9MLVkU&ab_channel=VTVTh%E1%BB%83Thao"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Button onClick={handleCheckIn} disabled={!isTeacher}>
                Server 1
              </Button>
            </a>
            <a
              href="https://www.youtube.com/watch?v=tR2kj9MLVkU&ab_channel=VTVTh%E1%BB%83Thao"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Button onClick={handleCheckIn} disabled>
                Server 2
              </Button>
            </a>
            <a
              href="https://www.youtube.com/watch?v=tR2kj9MLVkU&ab_channel=VTVTh%E1%BB%83Thao"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Button onClick={handleCheckIn} disabled>
                Server 3
              </Button>
            </a>
            <a
              href="https://www.youtube.com/watch?v=tR2kj9MLVkU&ab_channel=VTVTh%E1%BB%83Thao"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Button onClick={handleCheckIn} disabled>
                Server 4
              </Button>
            </a>
          </Space>
        </div>
      </div>
    </>
  );
}
