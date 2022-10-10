import { Route, Link, Routes, Navigate } from 'react-router-dom';
import React from 'react';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Faq from '../pages/Faq';
import ContactUs from '../pages/ContactUs';
import BlogDetails from '../pages/BlogDetails';
import ComingSoon from '../pages/ComingSoon';
import Properties from '../pages/Properties';
import Agents from '../pages/Agents';
import SingleProperty from '../pages/PropertyDetails';
import AgentDetails from '../pages/AgentDetails';
import { AuthRoutes } from '../utils/ProtectedRoutes';
import Societies from '../pages/Societies';
import Blocks from '../pages/Blocks';
import Phases from '../pages/Phases';
import NotFound from '../components/NotFound';

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/properties" element={<Properties />} />
      <Route exact path="/agents" element={<Agents />} />
      <Route exact path="/propertydetails/:id" element={<SingleProperty />} />
      <Route exact path="/agentdetails/:id" element={<AgentDetails />} />
      <Route path="/login" element={<AuthRoutes component={Login} />} />
      <Route path="/register" element={<AuthRoutes component={Register} />} />
      <Route exact path="/faq" element={<Faq />} />
      <Route exact path="/contact" element={<ContactUs />} />
      <Route exact path="/blog-details" element={<BlogDetails />} />
      <Route exact path="/coming-soon" element={<ComingSoon />} />
      <Route exact path="/societies" element={<Societies />} />
      <Route exact path="/blocks" element={<Blocks />} />
      <Route exact path="/phases" element={<Phases />} />
      <Route path="/notfound" element={<NotFound />} />
      <Route path="*" element={<Navigate replace to="/notfound" />} />
    </Routes>
  );
};

export default Router;
