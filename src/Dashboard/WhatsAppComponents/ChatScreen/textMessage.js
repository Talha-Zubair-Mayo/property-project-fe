import React from "react";

const TextMessage = ({ message, transmissionOrientation }) => {
    if (transmissionOrientation === "send") {
        return (

            <div className="send-mesg-main">
                <p className="send-mesg">{message}</p>
            </div>
        );
    } else {
        return (
            <div className="rcv-mesg-main">
                <p className="rcv-mesg">{message}</p>
            </div>
        );
    }

};

export default TextMessage;
