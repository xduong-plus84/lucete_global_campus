import React from "react";
import { useState } from "react";
import { dataDemoChatBox } from "../../util/dataDemoChatBox";
import WorldChatInput from "./WorldChatInput/WorldChatInput";
import WorldChatMessageList from "./WorldChatMessageList/WorldChatMessageList";

export default function WorldChat() {
  const [messList, setMessList] = useState(dataDemoChatBox);
  return (
    <div className="w-3/4 min-w-fit max-w-screen-2xl mx-auto pl-2 border-2 border-gray-200 rounded-l-2xl">
      <div className="overflow-y-scroll" style={{ height: 450 }}>
        {/* <div className="h-96 "> */}
        <WorldChatMessageList messList={messList} />
      </div>
      <div className="relative p-2">
        <WorldChatInput messList={messList} setMessList={setMessList} />
        {/* <WorldChatInput handleSentMess={handleSentMess} /> */}
      </div>
    </div>
  );
}
