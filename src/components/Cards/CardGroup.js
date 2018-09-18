import "./Cards.css";

import React, { Component } from "react";
import { connect } from "react-redux";

import Card from "./Card";
import { Spin } from "antd";
import LoadingCard from "../Loading";
import { GlobalPageTitle, FrontPageTitle } from "../Header/Header";
import { fetchTrends } from "../../store/actions/trendActions";

import Loadable from "react-loadable";

const Loading = () => <div>Loading...</div>;

const SearchInput = Loadable({
  loader: () => import("../Search/Search"),
  loading: () => Loading
});
const Masonry = Loadable({
  loader: () => import("react-masonry-component"),
  loading: () => Loading
});

class CardGroup extends Component {
  page = 1;
  state = {
    searchTrends: "",
    value: ""
  };
  onPaginatedSearch = e => {
    e.preventDefault();
    this.page += 1;
    this.props.fetchTrends(this.page);
  };
  handleSearch = e => {
    this.setState({ searchTrends: e.target.value });
  };
  render() {
    let { trends } = this.props;
    let { searchTrends } = this.state;
    return (
      <div className="maincontent__page-wrapper">
        <GlobalPageTitle>Eventbree Trends...</GlobalPageTitle>
        <FrontPageTitle>
          Inspirations and ideas for your events based on popular trends
        </FrontPageTitle>
        <SearchInput
          searchTrends={searchTrends}
          handleSearch={this.handleSearch}
        />
        <div>
          {trends.loading ? (
            <div>
              <LoadingCard />
            </div>
          ) : (
            <Masonry className={"container"} key={new Date().getTime()}>
              {trends.items.length !== 0
                ? trends.items
                    .filter(
                      card =>
                        `${card.category.name}${card.title}${card.date}${
                          card.culture.name
                        }${card.event_type.name}`
                          .toUpperCase()
                          .indexOf(searchTrends.toUpperCase()) >= 0
                    )
                    .map((value, index) => (
                      <Card key={index} card={value} value={value.id} />
                    ))
                : null}
            </Masonry>
          )}

          <div className="clickMe" onClick={this.onPaginatedSearch}>
            {trends.loadingMore ? (
              <Spin size="small" />
            ) : (
              <span>Show More</span>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  trends: state.trends.allTrends
});
export default connect(
  mapStateToProps,
  { fetchTrends }
)(CardGroup);
