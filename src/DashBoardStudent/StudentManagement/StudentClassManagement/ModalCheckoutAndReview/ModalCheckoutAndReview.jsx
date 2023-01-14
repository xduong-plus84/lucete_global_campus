import { Rate } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { setCloseModalReviewAction } from "../../../../redux/actions/actionModalReviewTeacher";
import ChonGiaoVien from "./ChonGiaoVien";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

export default function ModalCheckoutAndReview() {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col max-w-xl px-4 rounded-xl lg:px-8 text-gray-800">
      <div className="flex flex-col items-center w-full">
        <h2 className="text-3xl font-semibold text-center">
          Your opinion matters!
        </h2>
        <div className="flex flex-col items-center py-6 space-y-3">
          <ChonGiaoVien />
          <div className="flex space-x-3">
            <Rate
              defaultValue={5}
              tooltips={desc}
              style={{ fontSize: "2rem" }}
            />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <textarea
            rows="3"
            placeholder="Message..."
            className="p-4 rounded-md resize-none text-gray-800 bg-gray-50 border-2"
          ></textarea>
          <button
            type="button"
            className="py-4 my-8 font-semibold rounded-md text-gray-50 bg-green-500 hover:bg-green-600 duration-300"
            onClick={() => dispatch(setCloseModalReviewAction())}
          >
            Leave feedback
          </button>
        </div>
      </div>
    </div>
  );
}
