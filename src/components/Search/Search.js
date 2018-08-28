import React, { Component } from "react";
import { Input, Icon, Menu, Dropdown } from "antd";
import { handleResponse } from "../../helpers.js";
import { withRouter } from "react-router-dom";
import "./Search.css";
import {
  Culture_API_URL,
  Event_API_URL,
  Category_API_URL
} from "../../config.js";

const Search = Input.Search;
const SubMenu = Menu.SubMenu;
class SearchInput extends Component {
  state = {
    category: [],
    events: [],
    culture: []
  };
  cultureApi = () => {
    fetch(Culture_API_URL)
      .then(handleResponse)
      .then(data => {
        const cultureJson = data.data;
        this.setState({
          culture: cultureJson
        });
      });
  };
  categoryApi = () => {
    fetch(Category_API_URL)
      .then(handleResponse)
      .then(data => {
        const category = data.data;
        this.setState({
          category: category
        });
      });
  };
  eventApi = () => {
    fetch(Event_API_URL)
      .then(handleResponse)
      .then(data => {
        const event = data.data;
        this.setState({
          events: event
        });
      });
  };
  componentDidMount() {
    this.eventApi();
    this.categoryApi();
    this.cultureApi();
  }
  render() {
    let { category, culture, events } = this.state;
    let { history } = this.props;
    const DropMenu = (name, array) => {
      return (
        <SubMenu title={name}>
          {array.map((value, index) => (
            <Menu.Item key={index}>
              <div onClick={() => history.push(`/${value.uid}`)}>
                {value.name}
              </div>
            </Menu.Item>
          ))}
        </SubMenu>
      );
    };
    const menu = (
      <Menu>
        {DropMenu("Events", events)}
        {DropMenu("Category", category)}
        {DropMenu("Culture", culture)}
      </Menu>
    );
    const TrendsDropdown = () => {
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
export default withRouter(SearchInput);
