import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Hooks from '../../hooks';
import UserDropdownRoutes from './UserDropdownRoutes';

export default function Header() {
  const userinfo = useSelector((state) => state.UserLogin.data.user);
  const [showDropdown, setShowDropdown] = useState(false);
  const { Logout, AgentRole, IsUserLoggedIn, SuperAdmin } = Hooks();

  const ToggleProfileDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const dropDown = UserDropdownRoutes();
  return (
    <>
      <header id="header-container">
        <div id="header">
          <div className="px-4 container-fluid">
            <div className="left-side">
              <div id="logo">
                <Link to="/">
                  <img src={process.env.PUBLIC_URL + 'images/logo.svg'} alt="" />
                </Link>
              </div>
              <div className="mmenu-trigger">
                <button className="hamburger hamburger--collapse" type="button">
                  <span className="hamburger-box">
                    <span className="hamburger-inner" />
                  </span>
                </button>
              </div>
              <nav id="navigation" className="style-1">
                <ul id="responsive">
                  <li>
                    <Link to="societies">Societies</Link>
                  </li>
                  <li>
                    <Link to="agents">Agents</Link>
                  </li>

                  <li>
                    <Link to="properties">Properties</Link>
                  </li>
                  <li>
                    <a href="contact-us.html">Contact</a>
                  </li>
                  <li className="d-none d-xl-none d-block d-lg-block">
                    <a href="login.html">Login</a>
                  </li>
                  <li className="d-none d-xl-none d-block d-lg-block">
                    <a href="register.html">Register</a>
                  </li>
                  <li className="d-none d-xl-none d-block d-lg-block mt-5 pb-4 ml-5 border-bottom-0">
                    <a
                      href="add-property.html"
                      className="button border btn-lg btn-block text-center"
                    >
                      Add Listing
                      <i className="fas fa-laptop-house ml-2" />
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="clearfix" />
            </div>

            {AgentRole() ||
              (SuperAdmin() && (
                <div className="right-side d-none d-none  d-lg-none d-xl-flex">
                  {/* Header Widget */}
                  <div className="header-widget">
                    <Link to="/dashboard/addproperty" className="button border">
                      Add Listing
                      <i className="fas fa-laptop-house ml-2" />
                    </Link>
                  </div>
                  {/* Header Widget / End */}
                </div>
              ))}
            {IsUserLoggedIn() && (
              <div
                className={
                  showDropdown
                    ? 'header-user-menu user-menu  active'
                    : 'header-user-menu user-menu '
                }
              >
                <div onClick={() => ToggleProfileDropdown()} className="header-user-name">
                  <span>
                    <img src={process.env.PUBLIC_URL + '/images/testimonials/ts-1.jpg'} alt="" />
                  </span>
                  Hi, {userinfo?.firstName}!
                </div>
                <ul>
                  {dropDown.map((item, key) => {
                    if (item.visiblity) {
                      return (
                        <li>
                          <a href={item.link}>{item.name}</a>
                        </li>
                      );
                    }
                  })}
                  <li onClick={() => Logout()}>
                    <a>Log Out</a>
                  </li>
                </ul>
              </div>
            )}
            {IsUserLoggedIn() === false && (
              <div className="right-side d-none d-none d-lg-none d-xl-flex sign ml-0">
                <div className="header-widget sign-in">
                  <div className="show-reg-form modal-open">
                    <Link to="/login">Sign In</Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
