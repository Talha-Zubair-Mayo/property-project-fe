import { Route, Link, Switch, Redirect } from 'react-router-dom';
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

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/properties" component={Properties} />
      <Route exact path="/agents" component={Agents} />
      <Route exact path="/propertydetails/:id" component={SingleProperty} />
      <Route exact path="/agentdetails" component={AgentDetails} />
      <AuthRoutes exact path="/login" component={Login} />
      <AuthRoutes exact path="/register" component={Register} />
      <Route exact path="/faq" component={Faq} />
      <Route exact path="/contact" component={ContactUs} />
      <Route exact path="/blog-details" component={BlogDetails} />
      <Route exact path="/coming-soon" component={ComingSoon} />
      <Route exact path="/societies" component={Societies} />
      <Route exact path="/blocks" component={Blocks} />
      <Route exact path="/phases" component={Phases} />
    </Switch>
  );
};

export default Router;
