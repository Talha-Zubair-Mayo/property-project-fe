import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Hooks from "../../../hooks"
import UserDropdownRoutes from './UserDropdownRoutes';
export default function Header() {
  const userinfo = useSelector((state) => state.UserLogin.data.user);
  const [showDropdown, setShowDropdown] = useState(false);
  const { Logout } = Hooks();
  const ToggleProfileDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const dropDown = UserDropdownRoutes();
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
                  <Link to="/">
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

                    <li>
                      <a href="#">Property</a>
                      <ul>
                        <li>
                          <a href="single-property-1.html">Single Property 1</a>
                        </li>
                        <li>
                          <a href="single-property-2.html">Single Property 2</a>
                        </li>
                        <li>
                          <a href="single-property-3.html">Single Property 3</a>
                        </li>
                        <li>
                          <a href="single-property-4.html">Single Property 4</a>
                        </li>
                        <li>
                          <a href="single-property-5.html">Single Property 5</a>
                        </li>
                        <li>
                          <a href="single-property-6.html">Single Property 6</a>
                        </li>
                      </ul>
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
                    <img src={process.env.PUBLIC_URL + "/images/testimonials/ts-1.jpg"} alt="" />
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
