import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import Hooks from "../../../hooks"
import { UserDropdownRoutes, NavbarRoutes } from './HeaderRoutes';
export default function Header() {
  const userinfo = useSelector((state) => state.UserLogin.data.user);
  const [showDropdown, setShowDropdown] = useState(false);
  const { Logout, ActivatedRoutes } = Hooks();
  const ToggleProfileDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const dropDown = UserDropdownRoutes();
  const NavBarRoutes = NavbarRoutes();

  return (
    <>
      <div className="dash-content-wrap">
        <header id="header-container" className="db-top-header">
          {/* Header */}
          <div id="header">
            <div className="container-fluid">
              {/* Left Side Content */}
              <div className="left-side">
                {/* Logo */}
                <div id="logo">
                  <Link to="/dashboard">
                    <img src={process.env.PUBLIC_URL + "/images/logo.svg"} alt="" />
                  </Link>
                </div>
                {/* Mobile Navigation */}
                <div className="mmenu-trigger">
                  <button className="hamburger hamburger--collapse" type="button">
                    <span className="hamburger-box">
                      <span className="hamburger-inner" />
                    </span>
                  </button>
                </div>
                {/* Main Navigation */}
                <nav id="navigation" className="style-1">
                  <ul id="responsive">

                    {NavBarRoutes.map((item, key) => {
                      if (item.visiblity) {
                        return (
                          <li>
                            <NavLink
                              to={item.link}
                              className={({ isActive }) =>
                                isActive ? 'current' : undefined
                              }
                            >
                              {item.name}
                            </NavLink>
                            {/* <Link
                              className={item.link === ActivatedRoutes() && 'current'}
                              to={item.link}
                            >
                            
                            </Link> */}
                          </li>
                        );
                      }
                    })}
                    <li className="d-none d-xl-none d-block d-lg-block">
                      <a href="login.html">Login</a>
                    </li>
                    <li className="d-none d-xl-none d-block d-lg-block">
                      <a href="register.html">Register</a>
                    </li>

                  </ul>
                </nav>
                <div className="clearfix" />
                {/* Main Navigation / End */}
              </div>
              {/* Left Side Content / End */}
              {/* Right Side Content / */}
              <div className={
                showDropdown
                  ? 'header-user-menu user-menu  active'
                  : 'header-user-menu user-menu '
              }>
                <div onClick={() => ToggleProfileDropdown()} className="header-user-name">
                  <span>
                    <img src={process.env.REACT_APP_IMAGE_URL + userinfo?.photo} alt="" />
                  </span>
                  Hi, {userinfo?.firstName}!
                </div>
                <ul>
                  {dropDown.map((item, key) => {
                    if (item.visiblity) {
                      return (
                        <li>
                          <Link to={item.link}>{item.name}</Link>
                        </li>
                      );
                    }
                  })}
                  <li onClick={() => Logout()}>
                    <a>Log Out</a>
                  </li>
                </ul>
              </div>
              {/* Right Side Content / End */}
            </div>
          </div>
          {/* Header / End */}
        </header>
      </div>
      <div className="clearfix" />
    </>

  );
}
