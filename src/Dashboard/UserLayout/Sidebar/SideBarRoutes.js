import Hooks from '../../../hooks';
import React from 'react'

const SideBarRoutes = () => {
    const { IsUserLoggedIn, AgentRole, SuperAdmin } = Hooks();

    const Routes = [
        {
            name: "Dashboard",
            link: '/dashboard',
            icon: 'fa fa-map-marker',
            visiblity: AgentRole() || SuperAdmin()
        }
        ,
        {
            name: "Profile",
            link: '/dashboard/profile',
            icon: 'fa fa-user',
            visiblity: IsUserLoggedIn()
        },
        {
            name: "Societies",
            link: '/dashboard/societies',
            icon: 'fa fa-user',
            visiblity: AgentRole() || SuperAdmin()
        }
        , {
            name: "Phases",
            link: '/dashboard/phases',
            icon: 'fa fa-user',
            visiblity: AgentRole() || SuperAdmin()
        }
        , {
            name: "Blocks",
            link: '/dashboard/blocks',
            icon: 'fa fa-user',
            visiblity: AgentRole() || SuperAdmin()
        }
        , {
            name: "Add Property",
            link: '/dashboard/addproperty',
            icon: 'fa fa-list',
            visiblity: AgentRole() || SuperAdmin()
        }
        , {
            name: "My Properties",
            link: '/dashboard/properties',
            icon: 'fa fa-list',
            visiblity: AgentRole() || SuperAdmin()
        }, {
            name: " Favorited Properties",
            link: '/dashboard/favproperties',
            icon: 'fa fa-heart',
            visiblity: AgentRole() || SuperAdmin()
        }, {
            name: "Payments",
            link: '/dashboard/paymentmethod',
            icon: 'fa fa-credit-card',
            visiblity: AgentRole() || SuperAdmin()
        }
        , {
            name: "Change Password",
            link: '/dashboard/changepassword',
            icon: 'fa fa-lock',
            visiblity: IsUserLoggedIn()
        }

    ]

    return Routes
}

export default SideBarRoutes