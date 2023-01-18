import React from "react";
import { Rate, Tag } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
const { CheckableTag } = Tag;

const desc = ["terrible", "bad", "normal", "good", "wonderful"];
const tagsData = ["Checked in", "Checked out", "absent"];

export default function DailyReportTabClassStudent({ student }) {
  let { id, name, className, statusTag } = student;

  const [selectedTags, setSelectedTags] = useState(statusTag);

  const onChange = (e) => {
    console.log("Change:", e.target.value);
  };

  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    console.log("You are interested in: ", nextSelectedTags);
    setSelectedTags(nextSelectedTags);
  };

  const handleClickSubmit = (id) => {
    alert(`Handle Click Submit ${id}`);
  };

  return (
    <tr className="divide-x-2">
      <td className="p-6 w-2/12 text-center">{name}</td>
      <td className="p-6 w-3/12 text-center">
        {/* {tagsData.map((tag) => {
          let color = null;
          if (tag === "Checked in") {
            color = "green";
          }
          if (tag === "Checked out") {
            color = "geekblue";
          }
          if (tag === "absent") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })} */}
        {tagsData.map((tag) => (
          <CheckableTag
            key={tag}
            checked={selectedTags.indexOf(tag) > -1}
            onChange={(checked) => handleChange(tag, checked)}
          >
            {tag.toUpperCase()}
          </CheckableTag>
        ))}
      </td>
      <td className="p-6 w-7/12 text-center">
        <div className="flex items-end">
          <div className="flex flex-col justify-end min-w-fit h-20">
            <div className="flex items-end">
              <span className="inline-block w-20">Preparation</span>
              <Rate
                defaultValue={5}
                tooltips={desc}
                className="min-w-fit mx-2"
              />
            </div>
            <div className="flex items-end">
              <span className="inline-block w-20">Attitude</span>
              <Rate
                defaultValue={5}
                tooltips={desc}
                className="min-w-fit mx-2"
              />
            </div>
            <div className="flex items-end">
              <span className="inline-block w-20">Participation</span>
              <Rate
                defaultValue={5}
                tooltips={desc}
                className="min-w-fit mx-2"
              />
            </div>
          </div>
          <TextArea onChange={onChange} style={{ height: "6rem" }} />
          <button
            onClick={() => handleClickSubmit(id)}
            className="px-3 py-1 ml-2 font-semibold border rounded border-transparent bg-green-600 text-gray-50 hover:text-gray-50 hover:bg-green-500 duration-300"
          >
            Submit
          </button>
        </div>
      </td>
    </tr>
  );
}
