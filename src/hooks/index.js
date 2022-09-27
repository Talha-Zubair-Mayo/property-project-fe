import React from 'react'
import { useSelector } from 'react-redux'
import jwt_decode from "jwt-decode";
import { useLocation, useHistory } from 'react-router-dom';

const Hooks = () => {
    const location = useLocation();
    const token = localStorage.getItem("token");
    const IsUserLoggedIn = () => {
        if (token) {
            const decoded = jwt_decode(token);
            return decoded ? true : false
        } else {
            return false;
        }

    }

    const AgentRole = () => {
        if (token) {
            const decoded = jwt_decode(token);
            return decoded.role === "agent";
        } else {
            return false;
        }
    }
    const SuperAdmin = () => {
        if (token) {
            const decoded = jwt_decode(token);
            return decoded.role === "superadmin";
        } else {
            return false;
        }
    }
    const ActivatedRoutes = () => {
        return location.pathname
    }

    const Logout = () => {
        localStorage.clear();
        window.location.href = "/"
    }

    return {
        IsUserLoggedIn, AgentRole, ActivatedRoutes, Logout, SuperAdmin
    }
}

export default Hooks;