import React from 'react'
import Hooks from "../../../hooks"
export const NavbarRoutes = () => {
    const { AgentRole, SuperAdmin, Customer } = Hooks();

    const Routes = [
        {
            name: "Societies",
            link: '/dashboard/societies',
            visiblity: AgentRole() || SuperAdmin()
        },
        {
            name: "Phases",
            link: '/dashboard/phases',
            visiblity: AgentRole() || SuperAdmin()
        },
        {
            name: "Blocks",
            link: '/dashboard/blocks',
            visiblity: AgentRole() || SuperAdmin()
        },

        {
            name: "Agents",
            link: '/dashboard/agents',
            visiblity: SuperAdmin()
        }, {
            name: "Properties",
            link: '/dashboard/properties',
            visiblity: AgentRole() || SuperAdmin()
        },
        {
            name: "Societies",
            link: '/societies',
            visiblity: Customer()
        },
        {
            name: "Phases",
            link: '/phases',
            visiblity: Customer()
        },
        {
            name: "Blocks",
            link: '/blocks',
            visiblity: Customer()
        },

        {
            name: "Agents",
            link: '/agents',
            visiblity: Customer() || SuperAdmin()
        }, {
            name: "Properties",
            link: '/properties',
            visiblity: Customer()
        }


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