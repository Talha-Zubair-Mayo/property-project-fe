import React from 'react';
import Sidebar from '../UserLayout/Sidebar/Sidebar';
import Header from '../UserLayout/Header/Header';
import ManageDashboard from '../Dashboard/ManageDashboard';
import Listing from '../Dashboard/Listing';
import Message from '../Dashboard/Message';
import Review from '../Dashboard/Review';
import PersonalInformation from '../Dashboard/PersonalInformation';
import Footer from '../UserLayout/Footer/Footer';

export default function Dashboard() {
  return (
    <>
      <div className="col-lg-9 col-md-12 col-xs-12 pl-0 user-dash2">
     
        <ManageDashboard />
        <Listing />
        <Message />
        <Review />
      </div>
    </>
  );
}
