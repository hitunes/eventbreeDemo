import "./Search.css";

import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { handleResponse } from "../../helpers.js";
import {
  Culture_API_URL,
  Event_API_URL,
  Category_API_URL
} from "../../config.js";
import { Input, Icon, Menu, Dropdown } from "antd";

const Search = Input.Search;
const SubMenu = Menu.SubMenu;
class SearchInput extends Component {
  state = {
    category: [],
    events: [],
    culture: [],
    cultureType: {},
    categoryType: {},
    eventType: {}
  };
  cultureApi = () => {
    fetch(Culture_API_URL)
      .then(handleResponse)
      .then(data => {
        const culture = data.data;
        const cultureType = data.meta.classification;
        this.setState({ culture: culture, cultureType: cultureType });
      });
  };
  categoryApi = () => {
    fetch(Category_API_URL)
      .then(handleResponse)
      .then(data => {
        const category = data.data;
        const categoryType = data.meta.classification;
        this.setState({ category: category, categoryType: categoryType });
      });
  };
  eventApi = () => {
    fetch(Event_API_URL)
      .then(handleResponse)
      .then(data => {
        const event = data.data;
        const eventType = data.meta.classification;
        this.setState({ events: event, eventType: eventType });
      });
  };
  componentDidMount() {
    this.eventApi();
    this.categoryApi();
    this.cultureApi();
  }
  render() {
    let {
      category,
      culture,
      events,
      eventType,
      cultureType,
      categoryType
    } = this.state;
    let { history } = this.props;
    const DropMenu = (name, array, classification) => {
      return (
        <SubMenu title={name}>
          {array.map((value, index) => (
            <Menu.Item key={index}>
              <div
                onClick={() =>
                  history.push(`/${classification}/${value.id}/${value.uid}`)
                }
              >
                {value.name}
              </div>
            </Menu.Item>
          ))}
        </SubMenu>
      );
    };
    const menu = (
      <Menu>
        {DropMenu("Events", events, eventType)}
        {DropMenu("Category", category, categoryType)}
        {DropMenu("Culture", culture, cultureType)}
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
