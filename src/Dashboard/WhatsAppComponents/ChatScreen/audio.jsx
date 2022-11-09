import React from "react";

const Audio = ({ link, transmissionOrientation }) => {
  return (
    <>
      {transmissionOrientation === "sent" ? (
        <div className="d-flex justify-content-end">
          <div className="send-audio-main">
            <audio controls>
              <source src={link} type="audio/ogg" />
            </audio>
          </div>
        </div>
      ) : (
        <div className="rcv-audio-main">
          <audio controls>
            <source src={link} type="audio/ogg" />
          </audio>
        </div>
      )}
    </>
  );
};

export default Audio;
