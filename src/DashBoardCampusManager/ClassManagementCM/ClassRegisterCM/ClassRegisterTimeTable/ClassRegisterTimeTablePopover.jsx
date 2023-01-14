import React from "react";

export default function ClassRegisterTimeTablePopover(props) {
  const { classID } = props;

  return (
    <div className="p-4">
      <p className="text-red-500 font-bold">Content of {classID}</p>

      <ul class="list-disc">
        <li className="my-1">
          <span className="font-semibold">Subject:</span> E Level Reading
        </li>
        <li className="my-1">
          <span className="font-semibold">Online Teacher:</span> Stephen
        </li>
        <li className="my-1">
          <span className="font-semibold">Class Time:</span> Mon 14:50 ~ 16:00
        </li>
        <li className="my-1">
          <span className="font-semibold">Class Start Date: </span>
          2022.12.20
        </li>
        <li className="my-1">
          <span className="font-semibold">Current Status:</span> E4-1 Unit 1
        </li>
      </ul>
    </div>
  );
}
