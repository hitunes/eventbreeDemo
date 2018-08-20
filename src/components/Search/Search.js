import React, { Component } from "react";
import { Input, Icon, Menu, Dropdown } from "antd";
import { Events, Culture, Category } from "../../helpers.js";
import "./Search.css";

const Search = Input.Search;
const SubMenu = Menu.SubMenu;
export default class SearchInput extends Component {
  render() {
    let { handleSearch, searchTrends } = this.props;
    return (
      <div className="search-wrapper">
        <Search
          className="searchbox"
          value={searchTrends}
          prefix={
            <Icon
              type="search"
              style={{
                color: "rgba(0,0,0,.25)",
                fontSize: "18px"
              }}
            />
          }
          placeholder="Search for Trends"
          onChange={handleSearch}
          onSearch={value => console.log(value)}
        />
        <TrendsDropdown />
      </div>
    );
  }
}
// const onClick = function({ key }) {
//   message.info(`Click on item ${key}`);
// };
const menu = (
  <Menu>
    <SubMenu title="Events">
      {Events.map((value, index) => (
        <Menu.Item key={index}>{value}</Menu.Item>
      ))}
    </SubMenu>
    <SubMenu title="Category">
      {Category.map((value, index) => (
        <Menu.Item key={index}>{value}</Menu.Item>
      ))}
    </SubMenu>
    <SubMenu title="Culture">
      {Culture.map((value, index) => (
        <Menu.Item key={index}>{value}</Menu.Item>
      ))}
    </SubMenu>
  </Menu>
);
const TrendsDropdown = params => {
  return (
    <div>
      {window.innerWidth < 769 ? (
        <Dropdown overlay={menu} trigger={["click"]}>
          <a className="ant-dropdown-link" href="#">
            Trends <Icon type="down" />
          </a>
        </Dropdown>
      ) : (
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" href="#">
            Trends <Icon type="down" />
          </a>
        </Dropdown>
      )}
    </div>
  );
};
