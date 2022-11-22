import React, { useCallback, useEffect, useRef, useState } from "react";
import { Skeleton, message } from "antd";
import SendPinPopup from "../sendpinpopup";
import Video from "../Video";
import Audio from "../audio";
import * as WA_API from "../../../../store/api";
import TextMessage from "../textMessage";
import ImgMessage from "../ImgMessage";
import DocMessage from "../DocumentMessage";

const ChatDetails = ({ isLoading, userDetails, messageArray }) => {
  const [msg, setMsg] = useState("");
  const MediaUpload = useCallback((type) => {
    const inputFile = document.createElement("input");
    inputFile.type = "file";
    // @ts-ignore
    inputFile.accept =
      type === "image"
        ? "image/jpeg"
        : type === "video"
        ? "video/mp4"
        : type === "document"
        ? "application/pdf"
        : type === "audio" && "audio/mp3";
    inputFile.addEventListener("change", (e) => {
      // @ts-ignore
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("receiver", "923154074657");
      formData.append("mediaType", type);
      formData.append("file", file);
      message?.loading("Sending...", 1000);
      // @ts-ignore
      WA_API.SendMultimediaMessage(formData).then((res) => {
        message?.destroy();
        message?.success("Sent ", 2);
      });
    });
    inputFile.click();
  }, []);
  const resetScroll = () => {
    var elem = document.getElementById("msgArea");
    // @ts-ignore
    elem.scrollTop = elem?.scrollTopMax;
  };
  const chatContainer = useRef(null);

  const scrollToBottom = () => {
    const scroll =
      chatContainer?.current?.scrollHeight -
      chatContainer?.current?.clientHeight;
    console.log(scroll);
    chatContainer?.current?.scrollTo(0, scroll);
  };

  const onchange = (e) => {
    setMsg(e.target.value);
  };

  const onKeyPress = (event) => {
    if (event.charCode === 13) {
      message?.loading("Sending...", 1000000);
      WA_API.SendTextMessage({ receiver: "923154074657", text: msg }).then(
        // @ts-ignore
        (resp) => {
          message?.destroy();
          setMsg("");
          scrollToBottom();
          message?.success("Send ", 2);
        }
      );
    }
  };

  if (localStorage.getItem("isUpdated") === "true") {
    setTimeout(() => {
      resetScroll();
      scrollToBottom();
    }, 1000);
    localStorage.setItem("isUpdated", "false");
  }

  return (
    <div className="web-view">
      <div className="chatdetail-header px-3 py-2 d-flex justify-content-between align-items-center">
        <p>{userDetails.name}</p>
      </div>
      <div className="chat-detail-body p-3">
        <>
          {messageArray &&
            messageArray.length > 0 &&
            messageArray.map((item, index) => {
              // @ts-ignore
              if (item.type === "text")
                return (
                  <TextMessage
                    key={index}
                    // @ts-ignore
                    message={item.msg}
                    // @ts-ignore
                    transmissionOrientation={item.tWay}
                    // @ts-ignore
                    clientName={item.cName}
                  />
                );
              // @ts-ignore
              else if (item.type === "image")
                return (
                  <ImgMessage
                    key={index}
                    text=""
                    link={item.link}
                    transmissionOrientation={item.tWay}
                    // clientName={item.cName}
                  />
                );
              // @ts-ignore
              else if (item.type === "audio")
                return (
                  <Audio
                    key={index}
                    // @ts-ignore
                    link={item.link}
                    // @ts-ignore
                    transmissionOrientation={item.tWay}
                    // @ts-ignore
                    clientName={item.cName}
                  />
                );
              // @ts-ignore
              else if (item.type === "video")
                return (
                  <Video
                    key={index}
                    // @ts-ignore
                    link={item.link}
                    // @ts-ignore
                    transmissionOrientation={item.tWay}
                    // @ts-ignore
                    clientName={item.cName}
                  />
                );
              // @ts-ignore
              else if (item.type === "document")
                return (
                  <DocMessage
                    key={index}
                    // @ts-ignore
                    link={item.link}
                    // @ts-ignore
                    transmissionOrientation={item.tWay}
                    // @ts-ignore
                    clientName={item.cName}
                  />
                );
            })}
          {isLoading && (
            <>
              <Skeleton active />
              <Skeleton active />
              <Skeleton active />
              <Skeleton active />
              <Skeleton active />
            </>
          )}
        </>
      </div>

      <div className="chat-detail-footer">
        <textarea
          placeholder="Talk to me!"
          className="chatbox"
          name="chatbox"
          minLength={2}
          onKeyPress={onKeyPress}
          onChange={onchange}
          required></textarea>
        <SendPinPopup MediaUpload={MediaUpload} />
        <p className="px-3 border-left text-darkgreen">
          <i className="fas fa-location-arrow "></i>
        </p>
      </div>
    </div>
  );
};

export default ChatDetails;
