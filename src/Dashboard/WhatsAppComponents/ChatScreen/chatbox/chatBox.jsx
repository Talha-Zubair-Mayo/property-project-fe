import React from "react";
import ChatDetails from "../index";
import ChatboxHeader from "./header";
import RecentChats from "./recentChats";

const ChatBox = () => {
  return (
    <>
      <div className="row m-0">
        <div className="col-lg-3 col-4 p-0">
          <ChatboxHeader />
          <RecentChats recentChatClass="recent-chats" />
        </div>
        <div className="col-lg-9 col-8 p-0 border-left-2 bg-light">
          <ChatDetails />
        </div>
      </div>
    </>
  );
};

export default ChatBox;
