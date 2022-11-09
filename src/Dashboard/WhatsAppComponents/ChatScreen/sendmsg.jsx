import React from "react";

const SendMsg = ({ newMessage, messageOrientation }) => {
  return (
    <div className="send-mesg-main">
      <p className="send-mesg">{newMessage}</p>
    </div>
  );
};

export default SendMsg;
