import React, { useEffect, useState } from "react";
import ChatDetails from "./chatDetails";
import ChatboxHeader from "./header";
import RecentChats from "./recentChats";
import * as WA_API from "../../../../store/api";
import { message } from "antd";
const ChatBox = () => {
  const [userDetails, setUserDetails] = useState({});
  const [messageArray, setMessageArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const userChats = (senderNumber) => {
    var msgs = WA_API.GetAllMessagesByNumber(senderNumber);
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
          if (data[0].tWay !== "send") message?.info("New Message Received", 3);
          return data.sort().reverse();
        } else return old;
      });
      setIsLoading(false);
    });
  };

  useEffect(() => {
    if (userDetails?.senderNumber) {
      setIsLoading(true);
      var interval = setInterval(() => {
        userChats(userDetails?.senderNumber);
      }, 3000);
    }
    return () => {
      return clearInterval(interval);
    };
  }, [userDetails]);
  const userData = (data) => {
    setMessageArray([]);
    setIsLoading(true);
    setUserDetails(data);
  };
  return (
    <>
      <div className="row m-0">
        <div className="col-lg-3 col-4 p-0">
          <ChatboxHeader />
          <RecentChats userData={userData} recentChatClass="recent-chats" />
        </div>
        <div className="col-lg-9 col-8 p-0 border-left-2 bg-light">
          <ChatDetails
            isLoading={isLoading}
            messageArray={messageArray}
            userDetails={userDetails}
          />
        </div>
      </div>
    </>
  );
};

export default ChatBox;
