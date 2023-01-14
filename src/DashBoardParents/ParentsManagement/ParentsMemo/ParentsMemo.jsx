import React from "react";
import { Alert, Button, Timeline, Input } from "antd";
import { useState } from "react";
import "./parentMemo.css";
const { TextArea } = Input;

let dataParentMemo = [
  { id: 1, content: "Content 1", date: "1/05/2023" },
  { id: 2, content: "Content 2", date: "1/06/2023" },
  { id: 3, content: "Content 3", date: "1/07/2023" },
  { id: 4, content: "Content 4", date: "1/08/2023" },
  { id: 5, content: "Content 5", date: "1/09/2023" },
  { id: 6, content: "Content 6", date: "1/10/2023" },
  { id: 7, content: "Content 7", date: "1/11/2023" },
];

let dataParentMemoReverse = dataParentMemo.reverse();

export default function ParentsMemo() {
  const [valueTextArea, setValueTextArea] = useState("");
  const [idMemo, setIdMemo] = useState();
  const [isEdit, setIsEdit] = useState(false);
  let [dataMemo, setDataMemo] = useState(dataParentMemo);

  const onChange = (e) => {
    console.log("Change:", e.target.value);
    setValueTextArea(e.target.value);
  };

  const handleEditClick = (id, content) => {
    setValueTextArea(content);
    setIdMemo(id);
    setIsEdit(true);
  };

  const handleClickSubmit = () => {
    if (isEdit) {
      console.log({ idMemo });
      const index = dataMemo.findIndex((item) => item.id === idMemo);
      console.log("index: ", index);
      dataMemo[index].content = valueTextArea;
      setValueTextArea("");
    } else {
      let id = new Date().getTime().toString();
      let test = new Date().toLocaleDateString();
      let newMemo = {
        id: id,
        content: valueTextArea,
        date: test,
      };
      let dataMemoUpdate = [newMemo, ...dataMemo];
      setDataMemo(dataMemoUpdate);
    }
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
          {dataMemo.map((item, index) => {
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
