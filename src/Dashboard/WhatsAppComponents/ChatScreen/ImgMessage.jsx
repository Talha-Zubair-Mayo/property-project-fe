import React from "react";
const ImgMessage = ({ link, text, transmissionOrientation }) => {
  return (
    <>
      {transmissionOrientation === "sent " ? (
        <div className="d-flex justify-content-end">
          <div className="send-img-main">
            <img src={link} alt="img" />
            <p className="px-2 py-1">{text}</p>
          </div>
        </div>
      ) : (
        <div className="rcv-img-main">
          <img src={link} alt="img" />
          <p className="px-2 py-1">{text}</p>
        </div>
      )}
    </>
  );
};

export default ImgMessage;
