import React from "react";

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
  {
    name: "Raza Awan",
    id: "9",
    lastmessage: "okk",
  },
  {
    name: "Raza Awan",
    id: "10",
    lastmessage: "okk",
  },
  {
    name: "Raza Awan",
    id: "11",
    lastmessage: "okk",
  },
];

const RecentChats = (props) => {
  const { recentChatClass, setRecentChatPopup } = props;
  return (
    <>
      <div className={`${recentChatClass} `}>
        <div
          className="nav flex-column nav-pills "
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          {chats.map((data, index) => {
            return (
              <button
                onClick={() => setRecentChatPopup(false)}
                key={index}
                className="nav-link py-3  w-100"
                id={`v-pills-${data.id}-tab`}
                data-toggle="pill"
                href={`#v-pills-${data.id}`}
                role="tab"
                aria-controls={`v-pills-${data.id}`}
                aria-selected="true"
              >
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
