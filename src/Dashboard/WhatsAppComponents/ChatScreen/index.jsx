import React, { useCallback, useEffect, useRef, useState } from "react";
import SendPinPopup from "./sendpinpopup";
import Video from "./Video";
import Audio from "./audio";
import * as WA_API from "../../../store/api";
import { Skeleton, message } from "antd";
import MessageRecorder from "../Tools/VoiceRocorder";
import TextMessage from "./textMessage";
import ImgMessage from "./ImgMessage";
import DocMessage from "./DocumentMessage";
const Chatpopup = (props) => {
  const { number, closeModal } = props;
  const [msg, setMsg] = useState("");
  const [messageArray, setMessageArray] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const MediaUpload = useCallback((type, number) => {
    console.log("uploading...", number);
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
      formData.append("receiver", number);
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
  useEffect(() => {
    var interval = setInterval(() => {
      var msgs = WA_API.GetAllMessagesByNumber(number.senderNumber);
      msgs.then((resp) => {
        var data = [];
        resp.data.forEach((element) => {
          //In case the messages are in text formate
          if (element?.message?.body?.messages[0]?.type === "text") {
            if (element.message.way === "send") {
              data.push({
                tWay: "send",
                msg: element?.message?.body?.messages[0]?.text.body,
                type: "text",
              });
            } else {
              data.push({
                cName: element?.message?.body?.messages[0]?.from,
                tWay: "receive",
                msg: element?.message?.body?.messages[0]?.text.body,
                type: "text",
              });
            }
          } else if (element?.message?.body?.messages[0]?.type === "image") {
            if (element.message.way === "send") {
              data.push({
                tWay: "send",
                msg: "",
                type: "image",
                link: `http://localhost:8888/api/loadfile?messageId=${element?.message?.body?.messages[0]?.id}&fileType=image&way=sent`,
              });
            } else {
              data.push({
                cName: element?.message?.body?.messages[0]?.from,
                tWay: "receive",
                msg: "",
                type: "image",
                link: `http://localhost:8888/api/loadfile?messageId=${element?.message?.body?.messages[0]?.id}&fileType=image&way=received`,
              });
            }
          } else if (element?.message?.body?.messages[0]?.type === "document") {
            if (element.message.way === "send") {
              data.push({
                tWay: "send",
                msg: "",
                type: "document",
                link: `http://localhost:8888/api/loadfile?messageId=${element?.message?.body?.messages[0]?.id}&fileType=document&way=sent`,
              });
            } else {
              data.push({
                cName: element?.message?.body?.messages[0]?.from,
                tWay: "receive",
                msg: "",
                type: "document",
                link: `http://localhost:8888/api/loadfile?messageId=${element?.message?.body?.messages[0]?.id}&fileType=document&way=received`,
              });
            }
          } else if (element?.message?.body?.messages[0]?.type === "video") {
            if (element.message.way === "send") {
              data.push({
                tWay: "send",
                msg: "",
                type: "video",
                link: `http://localhost:8888/api/loadfile?messageId=${element?.message?.body?.messages[0]?.id}&fileType=video&way=sent`,
              });
            } else {
              data.push({
                cName: element?.message?.body?.messages[0]?.from,
                tWay: "receive",
                msg: "",
                type: "video",
                link: `http://localhost:8888/api/loadfile?messageId=${element?.message?.body?.messages[0]?.id}&fileType=video&way=received`,
              });
            }
          } else if (element?.message?.body?.messages[0]?.type === "audio") {
            if (element.message.way === "send") {
              data.push({
                tWay: "send",
                msg: "",
                type: "audio",
                link: `http://localhost:8888/api/loadfile?messageId=${element?.message?.body?.messages[0]?.id}&fileType=audio&way=sent`,
              });
            } else {
              data.push({
                cName: element?.message?.body?.messages[0]?.from,
                tWay: "receive",
                msg: "",
                type: "audio",
                link: `http://localhost:8888/api/loadfile?messageId=${element?.message?.body?.messages[0]?.id}&fileType=audio&way=received`,
              });
            }
          }
        });

        // @ts-ignore
        setMessageArray((old) => {
          if (old.length < data.length) {
            if (data[0].tWay !== "send")
              message?.info("New Message Received", 3);
            scrollToBottom();
            localStorage.setItem("isUpdated", "true");
            return data.sort().reverse();
          } else return old;
        });
      });
    }, 3000);

    return () => {
      return clearInterval(interval);
    };
  }, []);

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
    <>
      <div id="chatpopup">
        <div className="custom-m-header px-3">
          <h5 className="modal-title text-white " id="exampleModalLabel">
            {number.name}
          </h5>

          <button
            onClick={() => closeModal(number._id)}
            type="button"
            className="close text-white"
            aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="custom-m-body-detailchat">
          <>
            {messageArray && messageArray.length > 0 ? (
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
              })
            ) : (
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
        <div className="custom-m-footer">
          <textarea
            placeholder="Talk to me!"
            className="chatbox"
            name="chatbox"
            minLength="2"></textarea>
          <SendPinPopup
            MediaUpload={MediaUpload}
            senderNumber={number.senderNumber}
          />
          <p className="px-3 border-left text-darkgreen">
            <i className="fas fa-location-arrow "></i>
          </p>
        </div>
      </div>

      {/* <Modal
        open={isModalOpen}
        onOk={false}
        onCancel={handleCancel}
      >
        <MessageRecorder />
      </Modal> */}
    </>
  );
};

export default Chatpopup;
