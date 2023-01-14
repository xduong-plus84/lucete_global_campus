import React from "react";
import { Alert, Button, Timeline, Input } from "antd";
import { useState } from "react";

import "./parentMemo.css";

const { TextArea } = Input;

export default function ParentsMemo() {
  const [valueTextArea, setValueTextArea] = useState("");
  const [idMemo, setIdMemo] = useState();

  const onChange = (e) => {
    console.log("Change:", e.target.value);
    setValueTextArea(e.target.value);
  };

  const handleEditClick = (id, content) => {
    setValueTextArea(content);
    setIdMemo(id);
  };

  const handleClickSubmit = () => {
    console.log({ idMemo });
    const index = dataParentMemoReverse.findIndex((item) => item.id === idMemo);
    console.log("index: ", index);
    dataParentMemoReverse[index].content = valueTextArea;
    setValueTextArea("");
  };

  return (
    <div id="parentMemo" className="mt-8 mx-auto flex flex-col">
      <div className="w-1/3 mx-auto">
        <TextArea
          showCount
          maxLength={100}
          onChange={onChange}
          value={valueTextArea}
          placeholder="Type something here..."
        />
        <button
          onClick={() => handleClickSubmit()}
          className="mt-2 px-4 py-2 font-semibold rounded bg-gray-800 text-gray-100"
        >
          Submit
        </button>
      </div>
      <div className="w-2/3 ml-24 mt-5">
        <Timeline mode="left">
          {dataParentMemoReverse.map((item, index) => {
            console.log("index: ", index);
            return (
              <Timeline.Item key={index} label={item.date}>
                <Alert
                  description={item.content}
                  action={
                    <Button
                      onClick={() => handleEditClick(item.id, item.content)}
                      size="small"
                    >
                      Edit
                    </Button>
                  }
                />
              </Timeline.Item>
            );
          })}
        </Timeline>
      </div>
    </div>
  );
}

let dataParentMemo = [
  { id: 1, content: "Content 1", date: "01-Dec-2022" },
  { id: 2, content: "Content 2", date: "02-Dec-2022" },
  { id: 3, content: "Content 3", date: "03-Dec-2022" },
  { id: 4, content: "Content 4", date: "04-Dec-2022" },
  { id: 5, content: "Content 5", date: "05-Dec-2022" },
  { id: 6, content: "Content 6", date: "06-Dec-2022" },
  { id: 7, content: "Content 7", date: "07-Dec-2022" },
];

let dataParentMemoReverse = dataParentMemo.reverse();
