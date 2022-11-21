import React from "react";
import ChatBox from "../WhatsAppComponents/ChatScreen/chatbox/chatBox";
import { Tabs } from "antd";
const Chat = () => {
  const TabChange = (activeKey) => {
    console.log(activeKey)
  }
  return (
    <div className="col-lg-9 col-md-12 py-3 col-xs-12 pl-0 user-dash2">
      <Tabs onChange={TabChange} defaultActiveKey="1">
        <Tabs.TabPane tab="WhatsApp Chat" key="1">
          <ChatBox />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Text Messages" key="2">
          <ChatBox />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Call Recordings " key="3">
          <ChatBox />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default Chat;
