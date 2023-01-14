import React, { useState } from "react";
import { Space, Button, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";

import LearningStatus from "./Status/LearningStatus";
import TodoStatus from "./Status/TodoStatus";
import AllClass from "./AllClass/AllClass";
import ModalCheckoutAndReview from "./ModalCheckoutAndReview/ModalCheckoutAndReview";
import {
  checkInAction,
  checkOutAction,
} from "../../../redux/actions/actionActivityHistory";
import {
  setCloseModalReviewAction,
  setOpenModalReviewAction,
} from "../../../redux/actions/actionModalReviewTeacher";

export default function StudentClassManagement() {
  const dispatch = useDispatch();
  const [isCheckOut, setIsCheckOut] = useState(false);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  let isOpenModal = useSelector(
    (state) => state.reducerModalReviewTeacher.isOpenModal
  );
  console.log("isOpenModal: ", isOpenModal);

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
    <div className="flex w-full">
      <div className="mt-4 mb-12 w-3/4">
        <div className="current-class flex items-center py-2 border-b-2 border-black">
          <div className="flex flex-col justify-center">
            <img
              // src={require("../../../assets/imges/gems/gem7.png")}
              src="/imgs/gems/gem7.png"
              className="w-16 h-16"
              alt=""
            />
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
                disabled={isCheckOut}
                onClick={handleCheckOut}
              >
                {!isCheckOut ? "Check Out" : "Checked out"}
              </Button>
              {/* modal  */}
              <Modal
                open={isOpenModal}
                maskClosable={false}
                footer={null}
                onCancel={handleCloseModal}
              >
                <ModalCheckoutAndReview />
              </Modal>
              {/* modal  */}
            </Space>

            <Space className="py-2" wrap>
              <a
                href="https://www.youtube.com/watch?v=tR2kj9MLVkU&ab_channel=VTVTh%E1%BB%83Thao"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Button onClick={handleCheckIn}>Server 1</Button>
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

        <AllClass />
      </div>
      <div className="w-1/4 text-center">
        <LearningStatus />
        <TodoStatus />
      </div>
    </div>
  );
}
