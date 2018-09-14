import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { logoHeader } from "../../helpers.js";
import { connect } from "react-redux";
import { toggleSidebar } from "../../store/actions/sidebarActions";
import store from "../../store";
import "./Header.css";
import { nav_links } from "../../config.js";

function handleSidebar() {
  store.dispatch(toggleSidebar());
}

const NavLinks = () => {
  return (
    <div className="navlinks__wrapper">
      <div className="nav__sidebar-btn" onClick={() => handleSidebar()}>
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
          <div key={index}>
            <Link to={links.url}>{links.title}</Link>
          </div>
        ))}
      </div>
      <Button className="nav__button">Join partner network</Button>
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
