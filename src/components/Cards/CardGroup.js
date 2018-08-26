import React, { Component } from "react";
import Masonry from "react-masonry-component";
import { Spin } from "antd";
import Card from "./Card";
import Loading from "../Loading";
// import { connect } from "react-redux";
// import { fetchTrends } from "../../actions/trendActions";
import "./Cards.css";

class CardGroup extends Component {
  render() {
    let {
      cardsInfo,
      loading,
      loadingMore,
      error,
      searchTrends,
      updateLikes,
      onChange,
      onPaginatedSearch
    } = this.props;
    if (loading) {
      return (
        <div>
          <Loading />
        </div>
      );
    }
    if (error) {
      return <div className="error">{error}</div>;
    }
    return (
      <div>
        <Masonry className={"container"} key={new Date().getTime()}>
          {cardsInfo
            .filter(
              card =>
                `${card.category.name}${card.title}${card.date}${
                  card.culture.name
                }${card.event_type.name}`
                  .toUpperCase()
                  .indexOf(searchTrends.toUpperCase()) >= 0
            )
            .map((value, index) => (
              <Card
                card={value}
                key={index}
                updateLikes={updateLikes}
                onChange={onChange}
                value={value.id}
              />
            ))}
        </Masonry>
        <div className="clickMe" onClick={onPaginatedSearch}>
          {loadingMore ? <Spin size="small" /> : <span>Show More</span>}
        </div>
      </div>
    );
  }
}
export default CardGroup;
// export default connect(
//   null,
//   { fetchTrends }
// )(CardGroup);
