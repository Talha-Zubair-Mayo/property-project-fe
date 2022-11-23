import React from "react";
import { Route, Navigate } from "react-router-dom";
import Hooks from "../../hooks";

export const AuthRoutes = ({
    component: Component,

}) => {
    const { IsUserLoggedIn } = Hooks();
    if (IsUserLoggedIn() === false) {
        return <Component />;
    } else {
        return (
            <Navigate to="/" />
        );
    }
};



export const ProtectedRoutes = ({
    component: Component,
}) => {
    const { SuperAdmin, AgentRole } = Hooks();
    if (AgentRole() || SuperAdmin()) {
        return <Component />;
    } else {
        return (
            <Navigate to="/" />
        );
    }
};


export const AuthenticatedRoutes = ({
    component: Component,
}) => {
    const { IsUserLoggedIn, AgentRole } = Hooks();
    if (IsUserLoggedIn() || AgentRole()) {
        return <Component />;
    } else {
        return (
            <Navigate to="/login" />
        );
    }
};

export const AdminRoutes = ({
    component: Component,
}) => {
    const { SuperAdmin } = Hooks();
    if (SuperAdmin()) {
        return <Component />;
    } else {
        return (
            <Navigate to="/" />
        );
    }
};


