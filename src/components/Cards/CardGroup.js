import React, { Component } from "react";
import Masonry from "react-masonry-component";
import { Spin } from "antd";
import Card from "./Card";
import Loading from "../Loading";
import { connect } from "react-redux";
import { fetchTrends } from "../../store/actions/trendActions";
import "./Cards.css";

class CardGroup extends Component {
  page = 1;
  onPaginatedSearch = e => {
    e.preventDefault();
    this.page += 1;
    this.props.fetchTrends(this.page);
  };
  render() {
    let { trends, searchTrends } = this.props;
    if (trends.loading) {
      return (
        <div>
          <Loading />
        </div>
      );
    }
    return (
      <div>
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
        <div className="clickMe" onClick={this.onPaginatedSearch}>
          {trends.loadingMore ? <Spin size="small" /> : <span>Show More</span>}
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
