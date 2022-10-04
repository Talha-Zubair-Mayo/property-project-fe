import React from 'react'
import Hooks from "../../hooks"
export const NavbarRoutes = () => {
    const { IsUserLoggedIn } = Hooks();

    const Routes = [
        {
            name: "Societies",
            link: '/societies',
            visiblity: true
        },
        {
            name: "Phases",
            link: '/phases',
            visiblity: true
        },
        {
            name: "Blocks",
            link: '/blocks',
            visiblity: true
        },

        {
            name: "Agents",
            link: '/agents',
            visiblity: true
        }, {
            name: "Properties",
            link: '/properties',
            visiblity: true
        },



    ]

    return Routes
}


export const UserDropdownRoutes = () => {
    const { IsUserLoggedIn, AgentRole, SuperAdmin } = Hooks();

    const Routes = [
        {
            name: "Profile",
            link: '/dashboard/profile',
            visiblity: IsUserLoggedIn()
        },
        {
            name: "Add Property",
            link: '/dashboard/addproperty',
            visiblity: AgentRole() || SuperAdmin()
        }, {
            name: "Payments",
            link: '/dashboard/paymentmethod',
            visiblity: AgentRole() || SuperAdmin()
        }
        , {
            name: "Change Password",
            link: '/dashboard/changepassword',
            visiblity: IsUserLoggedIn()
        }

    ]

    return Routes
}
