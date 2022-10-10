import Hooks from '../../../hooks';
import React from 'react'
import { useParams } from 'react-router-dom';

const SideBarRoutes = () => {
    const { IsUserLoggedIn, AgentRole, SuperAdmin, UserDetails } = Hooks();
    const { id } = useParams();

    const Routes = [
        {
            name: "Dashboard",
            link: '/dashboard',
            icon: 'fa fa-map-marker',
            visiblity: false
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
        }
        , {
            name: " Appointments",
            link: `/dashboard/appointment/${UserDetails().id}`,
            icon: 'fas fa-calendar',
            visiblity: AgentRole() || SuperAdmin()
        }
        , {
            name: " Events",
            link: `/dashboard/events/${UserDetails().id}`,
            icon: 'fas fa-calendar',
            visiblity: AgentRole() || SuperAdmin()
        }
        , {
            name: "Payments",
            link: '/dashboard/paymentmethod',
            icon: 'fa fa-credit-card',
            visiblity: false
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