import React from "react";

const ChatboxHeader = () => {
  return (
    <div className="chatbox-header border-bottom d-flex justify-content-center px-2 align-items-center">
      <div className="chatbox-header-searchbar py-1 w-100">
        <div className="d-flex justify-content-between align-items-center">
          <input
            type="text"
            placeholder="Search or start a new chat"
            className=""
          />
          <i className="fa-solid fa-magnifying-glass cr-p"></i>
        </div>
      </div>
    </div>
  );
};

export default ChatboxHeader;
