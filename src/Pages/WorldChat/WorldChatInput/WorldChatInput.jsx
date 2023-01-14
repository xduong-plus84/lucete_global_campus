import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./emojibox.css";

import { SendOutlined, MehOutlined } from "@ant-design/icons";
import EmojiPicker from "emoji-picker-react";
export default function WorldChatInput(props) {
  let myID = 3;
  const { setMessList, messList } = props;
  let inputContentChat = useRef(null);

  const [isOpenEmojiPicker, setIsOpenEmojiPicker] = useState(false);
  const handlePickEmoji = (e) => {
    console.log("e: ", e);
    inputContentChat.current.value += e.emoji;
    setIsOpenEmojiPicker((currentStatus) => !currentStatus);
  };

  const handleSentMess = () => {
    const contentChat = inputContentChat.current.value;
    inputContentChat.current.value = "";
    const messageItem = {
      idUser: 3,
      img: "https://picsum.photos/300",
      alt: "so3",
      idMes: uuidv4(),
      content: contentChat,
    };

    const newMessList = [...messList, messageItem];
    setMessList(newMessList);
  };

  return (
    <div className="worldChatInput w-full flex justify-end items-center">
      {isOpenEmojiPicker && (
        <EmojiPicker
          onEmojiClick={(e) => handlePickEmoji(e)}
          height={400}
          width={500}
        />
      )}
      <button
        onClick={() => {
          setIsOpenEmojiPicker((currentStatus) => !currentStatus);
        }}
        className="flex items-center"
      >
        <MehOutlined className="" />
      </button>
      <input
        ref={inputContentChat}
        type="text"
        className="grow border-2 px-2 py-1 mx-2 focus:outline-none border-gray-100 bg-gray-100 rounded-xl"
      />
      <button
        onClick={() => {
          handleSentMess();
        }}
        className="flex items-center"
      >
        <SendOutlined />
      </button>
    </div>
  );
}
