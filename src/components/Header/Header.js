import React from "react";
import { Button } from "antd";
import "./Header.css";

export const NavLinks = params => {
  return (
    <div className="navlinks__wrapper">
      <div className="nav__logo">
        <img
          src="https://static.eventbree.com/trends/images/png/logo-header.png"
          alt=""
        />
      </div>
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
