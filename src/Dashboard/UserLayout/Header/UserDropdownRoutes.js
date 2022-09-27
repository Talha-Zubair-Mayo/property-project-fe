import React from 'react'
import Hooks from "../../../hooks"
const UserDropdownRoutes = () => {
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

export default UserDropdownRoutes