import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import SideBarRoutes from "./SideBarRoutes";

const Sidebar = () => {
  const sidebar = SideBarRoutes()
  const Location = useLocation();

  return (
    <>
      <div className="app-sidebar w-50">
        {
          sidebar.map((item, index) => {
            if (item.visiblity === true) {
              return <Link to={`${item.link.toLowerCase()}`} className={`w-100  ${item.link.toLowerCase() === Location.pathname ? 'sidebar-item-active' : ''} sidebar-item`}>
                {item.name}
              </Link>;
            }
          })
        }
      </div>

    </>
  );
}
export default Sidebar;