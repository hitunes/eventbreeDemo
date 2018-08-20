import React from "react";
import { logoHeader } from "../../helpers.js";
import "./Sidebar.css";

export const Sidebar = ({ isOpen, handleViewSidebar }) => {
  let sidebarClass = isOpen ? "sidebar open" : "sidebar";
  let sidebarOverlay = isOpen ? "sidebar__overlay" : "sidebarOverlay";
  return (
    <aside>
      <div className="aside__logo-wrapper" className={sidebarClass}>
        <div className="aside__header">
          <div className="aside__logo">
            <img src={logoHeader} alt="EVENTBREE" />
          </div>
          <div className="sidebar__close" onClick={handleViewSidebar}>
            <img src="images/close-btn.png" alt="" />
          </div>
        </div>
        <ul className="sidebar__ul">
          <li>
            <a href="#">TV</a>
          </li>
          <li>
            <a href="#">Trends</a>
          </li>
          <li>
            <a href="#">Market Place</a>
          </li>
          <li>
            <a href="#">Join Partner Network</a>
          </li>
        </ul>
      </div>
      <div className={sidebarOverlay} onClick={handleViewSidebar} />
    </aside>
  );
};
