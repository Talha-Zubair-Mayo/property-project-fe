import React from "react";

const TextMessage = ({ message, transmissionOrientation, clientName }) => {
  var placement = transmissionOrientation === "send" ? "right" : "left";
  var mysty = {}
  if (placement === "left")
    mysty = {
      background: "#007bff",
      color: "white",
    };
  return (
    <div className={"item " + placement} >
      <h6>{clientName && clientName}</h6>

      <div className={"msg msg-border-" + placement} style={mysty} >
        <p>{message}</p>
      </div>
    </div>
  );
};

export default TextMessage;
