import React from "react";
import PersonalInformation from "../Dashboard/PersonalInformation";
import { Tabs } from "antd";
import UserChangePassword from "./UserChangePassword";
export default function UserProfile() {
  return (
    <div className="col-lg-9 col-md-9 col-xs-9  mt-4 mt-33 mt-0 offset-lg-3 ">
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Personal Information" key="1">
          <PersonalInformation />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Change Password" key="2">
          <UserChangePassword />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}
