import React from "react";
import { logoHeader } from "../../helpers.js";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import "./Sidebar.css";
import { connect } from "react-redux";
import { toggleSidebar } from "../../store/actions/sidebarActions";
import store from "../../store";

function handleSidebar() {
  store.dispatch(toggleSidebar());
}
const { SubMenu } = Menu;
const Sidebar = () => {
  let sidebarClass = store.getState().sidebar.sidebarOpen
    ? "sidebar open"
    : "sidebar";
  let sidebarOverlay = store.getState().sidebar.sidebarOpen
    ? "sidebar__overlay"
    : "sidebarOverlay";
  return (
    <aside>
      <div className={sidebarClass}>
        <div className="aside__header">
          <div className="aside__logo">
            <img src={logoHeader} alt="EVENTBREE" height="22px" width="111px" />
          </div>
          <div className="sidebar__close" onClick={() => handleSidebar()}>
            <img src="images/close-btn.png" alt="" />
          </div>
        </div>
        <ul className="sidebar__ul">
          <li>
            <a href="https://eventbree.com">Home</a>
          </li>
          <li>
            <a href="https://eventbree.tv">TV</a>
          </li>
          <li>
            <a href="https://trends.eventbree.com">Trends</a>
          </li>
          <li>
            <a href="https://app.eventbree.com">Market Place</a>
          </li>
          <li>
            <a href="">Become A Supply Partner</a>
          </li>
          <Menu mode="inline" style={{ height: "100%" }}>
            <SubMenu key="sub1" title={<Link to="/blog">Blog</Link>}>
              <Menu.Item key="1" className="sidebar__ul-item">
                Latest
              </Menu.Item>
              <Menu.Item key="2" className="sidebar__ul-item">
                Event tips
              </Menu.Item>
              <Menu.Item key="3" className="sidebar__ul-item">
                Real events
              </Menu.Item>
              <Menu.Item key="4" className="sidebar__ul-item">
                Supplier insight
              </Menu.Item>
              <Menu.Item key="5" className="sidebar__ul-item">
                Videos
              </Menu.Item>
            </SubMenu>
          </Menu>
        </ul>
      </div>
      <div className={sidebarOverlay} onClick={() => handleSidebar()} />
    </aside>
  );
};
const mapStateToProps = state => ({
  sidebar: state.sidebar.sidebarOpen
});
export default connect(
  mapStateToProps,
  { toggleSidebar }
)(Sidebar);
