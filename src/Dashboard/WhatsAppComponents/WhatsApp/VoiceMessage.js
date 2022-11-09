import React from "react";

const VoiceMessage = ({ link, transmissionOrientation, clientName }) => {
  var placement = transmissionOrientation === "send" ? "right" : "left";
  return (
    <div className={"item " + placement}>
      <h6 >{clientName && clientName}</h6>
      <div style={{ marginLeft: 5 }} className={" msg-border-" + placement}>
        <div className="audio-cont">
          <video
            src={link}
            width="100%"
            height="40px"
            controls
          />
        </div>
      </div>
    </div>
  );
};

export default VoiceMessage;
