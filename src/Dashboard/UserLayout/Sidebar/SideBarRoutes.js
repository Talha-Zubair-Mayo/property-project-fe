// @ts-nocheck
import DashboardIcon from '../../../components/Icons/dashboardIcon';

const SideBarRoutes = () => {
  // const { IsUserLoggedIn, AgentRole, SuperAdmin, UserDetails } = Hooks();
  // const { id } = useParams();

  const Routes = [
    {
      name: "Dashboard Overview ",
      link: "/Dashboard",
      icon: DashboardIcon,
      visiblity: true,
    },
    {
      name: "Post Listing",
      link: "/postlisting",
      icon: DashboardIcon,
      visiblity: true,
    },
    {
      name: "Property Management",
      link: "/propertymanagement",
      icon: DashboardIcon,
      visiblity: true,
    }, {
      name: "Custom Profile Builder",
      link: "CustomProfileBuilder",
      icon: DashboardIcon,
      visiblity: true,
    }, {
      name: "Profile Settings",
      link: "/profilesettings",
      icon: DashboardIcon,
      visiblity: true,
    }

  ];
  return Routes;
};

export default SideBarRoutes;
