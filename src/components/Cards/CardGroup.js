import React, { Component } from "react";
import Masonry from "react-masonry-component";
import Card from "./Card";
import Loading from "../Loading";
// import { connect } from "react-redux";
// import { fetchTrends } from "../../actions/trendActions";
import "./Cards.css";

class CardGroup extends Component {
  // componentWillMount() {
  //   this.props.fetchTrends();
  // }
  render() {
    let {
      cardsInfo,
      loading,
      error,
      searchTrends,
      likeImg,
      likeCounter,
      likeImgToggler,
      onChange
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
        <Masonry className={"container"}>
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
                likeCounter={likeCounter}
                likeImg={likeImg}
                likeImgToggler={likeImgToggler}
                onChange={onChange}
                value={value.id}
              />
            ))}
        </Masonry>
      </div>
    );
  }
}
export default CardGroup;
// export default connect(
//   null,
//   { fetchTrends }
// )(CardGroup);
