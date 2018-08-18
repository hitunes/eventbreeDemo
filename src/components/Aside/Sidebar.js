import React from "react";
import { logoHeader } from "../../helpers.js";
import "./Sidebar.css";

export const Sidebar = ({ isOpen, handleViewSidebar }) => {
  let sidebarClass = isOpen ? "sidebar open" : "sidebar";
  return (
    <aside className={sidebarClass}>
      <div className="aside__logo-wrapper">
        <div className="aside__logo">
          <img src={logoHeader} alt="EVENTBREE" />
        </div>
        <div className="sidebar__close" onClick={handleViewSidebar}>
          <img src="images/close-btn.png" alt="" />
        </div>
      </div>
    </aside>
  );
};
