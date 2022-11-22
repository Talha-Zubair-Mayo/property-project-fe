import React, { useCallback, useEffect, useRef, useState } from "react";
import { Skeleton, message } from "antd";

const AudioChat = () => {
  const [messageArray, setMessageArray] = useState([]);

  useEffect(() => {
    var interval = setInterval(() => {
      var msgs = WA_API.GetAllMessagesByNumber();
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
  return (
    <>
      <>
        {messageArray && messageArray.length > 0 ? (
          messageArray.map((item, index) => {
            // @ts-ignore

            if (item.type === "audio")
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
    </>
  );
};

export default AudioChat;
