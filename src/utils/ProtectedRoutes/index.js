import React from "react";
import { Route, Redirect } from "react-router-dom";
import Hooks from "../../hooks";

export const AuthRoutes = ({
    component: Component,
    ...rest
}) => {
    const { IsUserLoggedIn } = Hooks();

    return (
        <Route
            {...rest}
            render={props => {
                if (IsUserLoggedIn() === false) {
                    return <Component {...props} />;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    );
                }
            }}
        />
    );
};



export const ProtectedRoutes = ({
    component: Component,
    ...rest
}) => {
    const { SuperAdmin, AgentRole } = Hooks();
    return (
        <Route
            {...rest}
            render={props => {
                if (AgentRole() || SuperAdmin()) {
                    return <Component {...props} />;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    );
                }
            }}
        />
    );
};


export const AuthenticatedRoutes = ({
    component: Component,
    ...rest
}) => {
    const { IsUserLoggedIn, AgentRole } = Hooks();
    return (
        <Route
            {...rest}
            render={props => {
                if (IsUserLoggedIn() || AgentRole()) {
                    return <Component {...props} />;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    );
                }
            }}
        />
    );
};

export const AdminRoutes = ({
    component: Component,
    ...rest
}) => {
    const { SuperAdmin } = Hooks();
    return (
        <Route
            {...rest}
            render={props => {
                if (SuperAdmin()) {
                    return <Component {...props} />;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    );
                }
            }}
        />
    );
};


