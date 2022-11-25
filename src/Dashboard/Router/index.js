import { Routes, Route, Navigate } from 'react-router-dom';
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
import WhatsAppPage from "../pages/WhatsAppPage"
import { AdminRoutes, ProtectedRoutes, AuthenticatedRoutes } from '../../utils/ProtectedRoutes';
import Appointments from '../pages/Appointments';
import EventScheduler from '../EventScheduler';
import NotFound from '../../components/NotFound';
import SocietyDetails from '../pages/SocietyDetails';
import Chat from '../pages/Chat';
import UsersList from '../pages/Users';
import RolesList from '../pages/Roles';
const UserRouter = () => {
    return (
        <Routes>
            <Route path="/dashboard" element={<ProtectedRoutes component={Dashboard} />} />
            <Route path="/dashboard/profile" element={<AuthenticatedRoutes component={UserProfile} />} />
            <Route path="/dashboard/properties" element={<ProtectedRoutes component={UserProperties} />} />
            <Route path="/dashboard/users" element={<AuthenticatedRoutes component={UsersList} />} />
            <Route path="/dashboard/roles" element={<AuthenticatedRoutes component={RolesList} />} />
            <Route path="/dashboard/addproperty" element={<ProtectedRoutes component={UserAddProperty} />} />
            <Route path="'/dashboard/paymentmethod" element={<ProtectedRoutes component={UserPaymentMethod} />} />
            <Route path="/dashboard/invoice" element={<ProtectedRoutes component={UserInvoice} />} />
            <Route path="/dashboard/societies" element={<ProtectedRoutes component={AllSocieties} />} />
            <Route path="/dashboard/society/:id" element={<ProtectedRoutes component={SocietyDetails} />} />
            {/* <Route  path="/dashboard/blocks" element={<ProtectedRoutes component={AllBlocks} />} /> */}
            {/* <Route  path="/dashboard/phases" element={<ProtectedRoutes component={AllPhases} />} /> */}
            <Route path="/dashboard/appointment/:id" element={<AuthenticatedRoutes component={Appointments} />} />
            <Route path="/dashboard/chat" element={<AuthenticatedRoutes component={Chat} />} />
            <Route path="/dashboard/events/:id" element={<AuthenticatedRoutes component={EventScheduler} />} />
            <Route path="/dashboard/changepassword" element={<AuthenticatedRoutes component={UserChangePassword} />} />
            <Route path="/dashboard/notfound" element={<NotFound />} />

            <Route path="/dashboard/whatsapp" element={<WhatsAppPage />} />

            <Route path="*" element={<Navigate replace to="/dashboard/notfound" />} />

        </Routes>
    );
};

export default UserRouter;
