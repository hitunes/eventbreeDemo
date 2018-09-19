import "./Header.css";

import React from "react";
import { connect } from "react-redux";

import { Button } from "antd";

import { toggleSidebar } from "../../store/actions/sidebarActions";
import store from "../../store";

import { nav_links } from "../../config.js";
import { logoHeader } from "../../helpers.js";
function handleSidebar() {
  store.dispatch(toggleSidebar());
}

const NavLinks = ({ headerShadow, navBtn }) => {
  return (
    <div className={`navlinks__wrapper ${headerShadow}`}>
      <div className="nav__sidebar-btn" onClick={() => handleSidebar()}>
        <img src="images/hamburger-menu.png" alt="ham" />
      </div>
      <a href="https://eventbree.com" className="nav__logo">
        <img
          src={logoHeader}
          alt="EventBree Logo"
          height="32px"
          width="190px"
        />
      </a>
      <div className="nav__links">
        {nav_links.map((links, index) => (
          <div key={index}>
            <a href={links.url} className={links.active}>
              {links.title}
            </a>
          </div>
        ))}
      </div>
      <div className={navBtn}>
        <Button className="nav__button-download ">Download</Button>
        <Button className="nav__button">Become a Supply Partner</Button>
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
const mapStateToProps = state => ({
  sidebar: state.sidebar.sidebarOpen
});
export default connect(
  mapStateToProps,
  { toggleSidebar }
)(NavLinks);
