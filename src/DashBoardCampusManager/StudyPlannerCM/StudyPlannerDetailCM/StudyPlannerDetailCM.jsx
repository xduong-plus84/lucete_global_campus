import React from "react";
import { useParams } from "react-router-dom";
import PlannerStudentInfo from "./PlannerStudentInfo";
import PlannerStudentMatched from "./PlannerStudentMatched";

export default function StudyPlannerDetailCM() {
  const { somethingID } = useParams();
  const handleClickSave = () => {
    alert("Hanle Click Save");
  };
  const handleClickCancel = () => {
    alert("Hanle Click Cancel");
  };
  return (
    <div id="StudyPlannerDetailCM">
      <p className="mb-8">somethingID: {somethingID}</p>
      <PlannerStudentInfo somethingID={somethingID} />
      <PlannerStudentMatched somethingID={somethingID} />
      <div className="text-center">
        <button
          onClick={() => handleClickSave()}
          className="w-24 px-3 py-1 my-4 font-semibold border rounded border-transparent bg-green-600 text-gray-50 hover:text-gray-50 hover:bg-green-500 duration-300"
        >
          Save
        </button>
        <button
          onClick={() => handleClickCancel()}
          className="w-24 px-3 py-1 my-4 font-semibold border rounded border-gray-600 text-gray-600 bg-gray-50 hover:text-gray-50 hover:bg-red-600 hover:border-transparent duration-300 ml-3"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
