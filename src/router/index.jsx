import { Route, Link, Routes, Navigate } from "react-router-dom";
import React from "react";
import Login from "../Forms/Login";
import Signup from "../Forms/signup";
import AccountVerification from "../Forms/accountVerification";
import ForgotPasword from "../Forms/forgotPasword";

import { AuthRoutes } from "../utils/ProtectedRoutes";

const Router = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/agents" element={<Agents />} />
      <Route path="/propertydetails/:id" element={<SingleProperty />} />
      <Route path="/agentdetails/:id" element={<AgentDetails />} /> */}
      {/* <Route path="/login" element={<AuthRoutes component={Login} />} />
      <Route path="/signup" element={<AuthRoutes component={Signup} />} />
      <Route path="/accountverification" element={<AuthRoutes component={AccountVerification} />} />
      <Route path="/forgotpassword" element={<AuthRoutes component={ForgotPasword} />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/accountverification" element={<AccountVerification />} />
      <Route path="/forgotpassword" element={<ForgotPasword />} />{" "}
      {/* <Route path="/faq" element={<Faq />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/blog-details" element={<BlogDetails />} />
      <Route path="/coming-soon" element={<ComingSoon />} />
      <Route path="/societies" element={<Societies />} />
      <Route path="/blocks" element={<Blocks />} />
      <Route path="/phases" element={<Phases />} />
      <Route path="/notfound" element={<NotFound />} /> */}
      {/* <Route path="*" element={<Navigate replace to="/login" />} /> */}
    </Routes>
  );
};

export default Router;
