import React from "react";
import FreeTrialbtn from "../component/Freerialbtn";
import "bootstrap/dist/css/bootstrap.min.css";
// import Ximg from "../component/x.svg";

const NavbarMobile = () => {
  const link = {
    url: "https://img.icons8.com/color/48/000000/gitlab.png",
    href: "/",
  };
  return (
    <>
      <div className="mobile-icons" id="mobile-icons-id">
        <input type="checkbox" id="hamburger-toggle" />

        <label className="hamburger-wrapper" for="hamburger-toggle">
          <button className="search-icon" aria-label="Search" type="button">
            <i className="fa fa-search"></i>
          </button>
          <span className="hamburger"></span>
        </label>
        <div className="navbarmobile">
          <ul className="nav-list">
            <li>
              <a href={link.href}>Product</a>
            </li>
            <li>
              <a href={link.href}>Pricing</a>
            </li>
            <li>
              <a href={link.href}>Resources</a>
            </li>
            <li>
              <a href={link.href}>Blog</a>
            </li>
            <li>
              <a href={link.href}>Support</a>
            </li>
            <li>
              <a href={link.href}>Install GitLab</a>
            </li>
            <li className="nosubmenu">
              <a href={link.href}>Explore</a>
            </li>
            <li className="nosubmenu">
              <a href={link.href}>Sign in</a>
            </li>

            <div className="nav-cta-container">
              <FreeTrialbtn />
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavbarMobile;
