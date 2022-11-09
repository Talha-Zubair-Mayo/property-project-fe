import { FileDoneOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css';
import React from 'react';

const DocMessage = ({ link, transmissionOrientation, clientName }) => {
  var placement = transmissionOrientation === "send" ? "right" : "left";

  return (
    <div className={"item " + placement}>
      <h6>{clientName && clientName}</h6>
      <div className={"msg msg-border-" + placement}>
        <div className="img-cont">
          <p><a href={link} target='_blank'>Open PDF
            <FileDoneOutlined style={{ fontSize: '30px' }} />
          </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DocMessage;
