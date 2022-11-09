import React from "react";

const RecieveMsg = (props) => {
  const { newMessage } = props;
  return (
    <div className="rcv-mesg-main">
      <p className="rcv-mesg">{newMessage}</p>
    </div>
  );
};

export default RecieveMsg;
