import React from "react";
import { logoHeader } from "../../helpers.js";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { aside__navlinks } from "../../config.js";

export const Sidebar = ({ isOpen, handleViewSidebar }) => {
  let sidebarClass = isOpen ? "sidebar open" : "sidebar";
  let sidebarOverlay = isOpen ? "sidebar__overlay" : "sidebarOverlay";
  return (
    <aside>
      <div className={sidebarClass}>
        <div className="aside__header">
          <div className="aside__logo">
            <img src={logoHeader} alt="EVENTBREE" height="22px" width="111px" />
          </div>
          <div className="sidebar__close" onClick={handleViewSidebar}>
            <img src="images/close-btn.png" alt="" />
          </div>
        </div>
        <ul className="sidebar__ul">
          {aside__navlinks.map((link, index) => (
            <li key={index}>
              <Link to={link.url}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={sidebarOverlay} onClick={handleViewSidebar} />
    </aside>
  );
};
