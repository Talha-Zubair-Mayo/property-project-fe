import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getAllWhatsAppProfilesApi } from "../../../../store/api";

const RecentChats = ({ userData, recentChatClass, setRecentChatPopup }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllWhatsAppProfilesApi().then((res) => {
      setUsers(res.data.result);
      userData(res.data.result[0]);
    });
  }, []);
  return (
    <>
      <div className={`${recentChatClass} `}>
        <div
          className="nav flex-column nav-pills "
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical">
          {users.map((data, index) => {
            return (
              <button
                onClick={() => {
                  userData(data);
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
                      <p className=" text-left mb-0 coloring" id="last_message">
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
    </>
  );
};

export default RecentChats;
