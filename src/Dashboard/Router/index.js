import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Dashboard from '../pages/UserDashoard';
import UserProfile from '../pages/UserProfile';
import UserProperties from '../pages/UserProperties';
import UserFavoriteProperties from '../pages/UserFavoriteProperties';
import UserAddProperty from '../pages/UserAddProperty';
import UserPaymentMethod from '../pages/UserPaymentMethod';
import UserInvoice from '../pages/UserInvoice';
import UserChangePassword from '../pages/UserChangePassword';
import AllSocieties from "../pages/AllSocieties";
import AllBlocks from '../pages/Blocks';
import AllPhases from '../pages/Phases';

import { AdminRoutes, ProtectedRoutes, AuthenticatedRoutes } from '../../utils/ProtectedRoutes';
const UserRouter = () => {
    return (
        <Routes>
            <Route exact path="/dashboard" element={<ProtectedRoutes component={Dashboard} />} />
            <Route exact path="/dashboard/profile" element={<AuthenticatedRoutes component={UserProfile} />} />
            <Route exact path="/dashboard/properties" element={<ProtectedRoutes component={UserProperties} />} />
            <Route exact path="/dashboard/favproperties" element={<AuthenticatedRoutes component={UserFavoriteProperties} />} />
            <Route exact path="/dashboard/addproperty" element={<ProtectedRoutes component={UserAddProperty} />} />
            <Route exact path="'/dashboard/paymentmethod" element={<ProtectedRoutes component={UserPaymentMethod} />} />
            <Route exact path="/dashboard/invoice" element={<ProtectedRoutes component={UserInvoice} />} />
            <Route exact path="/dashboard/societies" element={<ProtectedRoutes component={AllSocieties} />} />
            <Route exact path="/dashboard/blocks" element={<ProtectedRoutes component={AllBlocks} />} />
            <Route exact path="/dashboard/phases" element={<ProtectedRoutes component={AllPhases} />} />
            <Route exact path="/dashboard/changepassword" element={<AuthenticatedRoutes component={AllPhases} />}

            />
        </Routes>
    );
};

export default UserRouter;
