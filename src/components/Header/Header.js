import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { logoHeader } from "../../helpers.js";
import "./Header.css";

export const NavLinks = ({ handleViewSidebar }) => {
  return (
    <div className="navlinks__wrapper">
      <div className="nav__sidebar-btn" onClick={handleViewSidebar}>
        <img src="images/hamburger-menu.png" alt="ham" />
      </div>
      <Link to="/" className="nav__logo">
        <img src={logoHeader} alt="EventBree Logo" />
      </Link>
      <div className="nav__links">
        <span>Marketplace</span>
        <span>Trends</span>
        <span>TV</span>
        <Button>Join partner network</Button>
      </div>
    </div>
  );
};
export const GlobalPageTitle = () => {
  return <div className="globalpagetitle">Eventbree Trends...</div>;
};
export const FrontPageTitle = params => {
  return (
    <div className="frontpagetitle">
      Inspirations and ideas for your events based on popular trends
    </div>
  );
};
