import React from "react";
import { logoHeader } from "../../helpers.js";
import "./Sidebar.css";
import { aside__navlinks } from "../../config.js";

export const Sidebar = ({ isOpen, handleViewSidebar }) => {
  let sidebarClass = isOpen ? "sidebar open" : "sidebar";
  let sidebarOverlay = isOpen ? "sidebar__overlay" : "sidebarOverlay";
  return (
    <aside>
      <div className="aside__logo-wrapper" className={sidebarClass}>
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
              <a href={link.url} target="_blank">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={sidebarOverlay} onClick={handleViewSidebar} />
    </aside>
  );
};
