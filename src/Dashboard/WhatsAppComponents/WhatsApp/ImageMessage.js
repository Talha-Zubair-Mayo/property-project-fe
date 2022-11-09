import { Image } from "antd";
import 'antd/dist/antd.css';
import React from "react";
const ImageMessage = ({ link, transmissionOrientation, clientName }) => {
  var placement = transmissionOrientation === "send" ? "right" : "left";

  return (
    <div className={"item " + placement}>
      <h6>{clientName && clientName}</h6>
      <div className={"msg msg-border-" + placement}>
        <div className="img-cont">
          <Image
            src={link}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageMessage;
