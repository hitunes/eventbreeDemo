import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { logoHeader } from "../../helpers.js";
import "./Header.css";
import { nav_links } from "../../config.js";

export const NavLinks = ({ handleViewSidebar }) => {
  return (
    <div className="navlinks__wrapper">
      <div className="nav__sidebar-btn" onClick={handleViewSidebar}>
        <img src="images/hamburger-menu.png" alt="ham" />
      </div>
      <Link to="/" className="nav__logo">
        <img
          src={logoHeader}
          alt="EventBree Logo"
          height="45px"
          width="190px"
        />
      </Link>
      <div className="nav__links">
        {nav_links.map((links, index) => (
          <span key={index}>
            <a href={links.url} target="_blank">
              {links.title}
            </a>
          </span>
        ))}
        <Button>Join partner network</Button>
      </div>
    </div>
  );
};
export const GlobalPageTitle = ({ children }) => {
  return <div className="globalpagetitle">{children}</div>;
};
export const FrontPageTitle = ({ children }) => {
  return <div className="frontpagetitle">{children}</div>;
};
