import React, { Component } from "react";
import { Input, Icon, Menu, Dropdown } from "antd";
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
          placeholder="Search for trends..."
          onChange={handleSearch}
          onSearch={value => console.log(value)}
        />
        <TrendsDropdown />
      </div>
    );
  }
}
let culture = [
  "Asian",
  "African",
  "European",
  "Indian",
  "Western",
  "Jewish",
  "Arabian",
  "Greek",
  "Italian",
  "English",
  "General",
  "Other"
];
let Events = [
  "Bachelorette Party",
  "Bachelor's Eve",
  "Funerals",
  "Kids Party",
  "Birthdays",
  "Graduations",
  "Reunions",
  "Christening / Naming",
  "Ceremonies",
  "Anniversaries",
  "Social events",
  "Baby showers",
  "Weddings"
];
let Category = [
  "Floral",
  "Cakes",
  " Canape",
  "Event Website",
  "Kids Entertainment",
  "Fabrics",
  "Stationaries",
  "Transportation",
  "Venue",
  "Mcs & Toastmaster",
  "Wigs & Weaves",
  "Jewellery",
  "Gift Service",
  "Cakes & Desserts",
  "Drinks & Cocktails",
  "Music Entertaiment",
  "Traditional Wedding Gifts",
  "Lighting & Sounds",
  "Desserts",
  "Party Host",
  "Dancing Entertainment",
  "Storyteller",
  "Decoration",
  "Honeymoon",
  "Fashion Accessories",
  "Invitation Cards",
  "Event & Party Rentals",
  "Catering Services",
  "Balloon Artstery",
  "Photography",
  "Balloon Twisters",
  "Bands",
  "Bridal Wears",
  "Mixologist",
  "Videography",
  "Fashion & Style",
  "Media Coverage",
  "Wedding Decorator",
  "Menswear",
  "Hosts & Hostesses",
  "Event Security",
  "Waiters & Waitresses",
  "Beauty, Hair & Make-up",
  "Kids Play Center",
  "Djs",
  "Event Planners",
  "Party Entertainment"
];
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
      {culture.map((value, index) => (
        <Menu.Item key={index}>{value}</Menu.Item>
      ))}
    </SubMenu>
  </Menu>
);
const TrendsDropdown = params => {
  return (
    <Dropdown overlay={menu}>
      <span className="ant-dropdown-link">
        Trends <Icon type="down" />
      </span>
    </Dropdown>
  );
};
