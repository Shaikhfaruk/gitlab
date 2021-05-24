import React from "react";
import FreeTrialbtn from "../component/Freerialbtn";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
  const link = {
    url: "https://img.icons8.com/color/48/000000/gitlab.png",
    href: "/",
  };
  return (
    <>
      <header className="navbar" role="navigation" id="main-nav navbarid">
        <div className="navbar-left">
          <a href={link.href}>
            <img src={link.url} alt="brand" className="navbar-brand" />
            <g> GitLab</g>
          </a>
          <div className="mobile-cta-container nav-cta-container">
            <FreeTrialbtn />
          </div>
        </div>
        <div className="navbar-right">
          <ul id="dsplNone">
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
            <li>
              <button className="search-icon" aria-label="Search" type="button">
                <i class="fa fa-search"></i>
              </button>
            </li>

            <div className="nav-cta-container">
              <FreeTrialbtn />
            </div>
          </ul>
        </div>
        <NavbarMobile />
      </header>
    </>
  );
};

export default Navbar;
