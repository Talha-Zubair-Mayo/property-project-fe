// @ts-nocheck
import React, { useEffect, useState } from "react";
import Chatpopup from ".";
import { getAllWhatsAppProfilesApi } from "../../../store/api";

const chats = [
  {
    name: "Raza Awan",
    id: "1",
    lastmessage: "okk",
  },
  {
    name: "Raza Awan",
    id: "2",
    lastmessage: "okk",
  },
  {
    name: "Raza Awan",
    id: "3",
    lastmessage: "okk",
  },
  {
    name: "Raza Awan",
    id: "4",
    lastmessage: "okk",
  },
  {
    name: "Raza Awan",
    id: "5",
    lastmessage: "okk",
  },
  {
    name: "Raza Awan",
    id: "6",
    lastmessage: "okk",
  },
  {
    name: "Raza Awan",
    id: "7",
    lastmessage: "okk",
  },
  {
    name: "Raza Awan",
    id: "8",
    lastmessage: "okk",
  },
];
const RecentChatPP = () => {
  const [showRecentChat, setshowRecentChat] = useState(false);
  const [chatcount, setchatcount] = useState(0);
  const [userData, setUserData] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllWhatsAppProfilesApi().then((res) => {
      setUsers(res.data.result);
    });
  }, []);

  const openPopup = (user) => {
    setUserData((old) => {
      console.log(user);
      if (!old.includes(user)) {
        return [...old, user];
      } else {
        return old;
      }
    });
  };
  const closeModal = (data) => {
    const myArray = [...userData];
    const index = myArray.indexOf(data);
    console.log(index);
    myArray.splice(index, 1);
    console.log(myArray);
    setUserData(myArray);
  };
  return (
    <>
      <div className="chat-popups-main">
        <div
          className="d-flex justify-content-end align-items-center w-100 pr-4"
          style={{ height: "1px !important" }}>
          {userData.map((res) => {
            return (
              <Chatpopup
                closeModal={closeModal}
                number={res}
                showcheck={true}
              />
            );
          })}
        </div>

        <div className="position-relative" style={{ width: "300px" }}>
          <div
            className="recentchat-pp cr-p"
            onClick={() => setshowRecentChat(true)}>
            <div className="d-flex justify-content-between align-items-center">
              <p>
                <i className="fa-brands fa-whatsapp"></i>
                <span className="pl-2">Messaging</span>
              </p>
              <i className="fa-solid fa-caret-up"></i>
            </div>
          </div>
          {showRecentChat ? (
            <div className="recent-chats-detail-pp">
              <div
                className="d-flex cr-p align-items-center justify-content-between bg-whatsapp-green px-3 py-2 text-white"
                onClick={() => setshowRecentChat(false)}>
                <p className="py-2">Messages</p>
                <span className="">
                  <i className="fa-solid fa-caret-down"></i>
                </span>
              </div>

              <div className="chatbox-header-searchbar border-bottom px-3 py-1">
                <div className="d-flex justify-content-between align-items-center">
                  <input
                    type="text"
                    placeholder="Search or start a new chat"
                    className=""
                  />
                  <i className="fa-solid fa-magnifying-glass cr-p"></i>
                </div>
              </div>

              <div className="recent-chats-detail-body">
                <div
                  className="nav flex-column nav-pills "
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical">
                  {users.map((data, index) => {
                    return (
                      <button
                        onClick={() => {
                          openPopup(data);
                          // setRecentChatPopup(false);
                        }}
                        key={index}
                        className="nav-link py-3  w-100"
                        data-toggle="pill"
                        role="tab"
                        aria-selected="true">
                        <div className="divcont">
                          <div className="pl-3">
                            <div>
                              <p
                                className=" text-left mb-0 coloring"
                                id="last_message">
                                {data.name}
                              </p>
                            </div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default RecentChatPP;
