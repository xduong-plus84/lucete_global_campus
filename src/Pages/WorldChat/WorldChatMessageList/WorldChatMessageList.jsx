import { Alert, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import React, { useEffect } from "react";
import { dataDemoChatBox } from "../../../util/dataDemoChatBox";
import { useState } from "react";

const styleAvatar = {
  width: 40,
  height: 40,
  objectFit: "cover",
  objectPosition: "center",
  borderRadius: "40px",
  margin: "0 10px",
};

export default function WorldChatMessageList(props) {
  let myID = 3;
  const { messList } = props;
  console.log("messList: ", messList);

  useEffect(() => {
    // console.log("scroll");
    document
      .querySelector("#worldChatMessageList li:last-child")
      .scrollIntoView();
    // window.scrollIntoView(false);
  }, [messList]);

  const renderMess = () => {
    return messList.map((item, index) => {
      return (
        <li
          key={index}
          className={
            item.idUser == myID
              ? "flex items-center my-4 flex-row-reverse"
              : "flex items-center my-4"
          }
        >
          <img src={item.img} style={{ ...styleAvatar }} alt={item.img} />
          <div className="bg-gray-100 px-4 py-1 rounded-full">
            {item.content}
          </div>
        </li>
      );
    });
  };
  return <ul id="worldChatMessageList">{renderMess()}</ul>;
}
