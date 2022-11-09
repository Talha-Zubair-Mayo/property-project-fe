import React from "react";

const VideoMessage = ({ link, transmissionOrientation, clientName }) => {
  var placement = transmissionOrientation === "send" ? "right" : "left";
  return (
    <div className={"item " + placement}>
      <h6>{clientName && clientName}</h6>
      <div className={"msg msg-border-" + placement}>
        <div className="vd-cont">
          <video
            src={link}
            width="100%"
            height="100%"
            controls
          />
        </div>
      </div>
    </div>
  );
};

export default VideoMessage;
