import React, { Component } from "react";
import "./Cards.css";
export default class Cards extends Component {
  render() {
    let { cardsInfo } = this.props;
    return (
      <div>
        {cardsInfo.map((value, index) => (
          <div className="card">
            <a href={value.url}>
              <div className="card-image">
                <img src={value.image} />
                <div className="card-details">
                  <div className="card-date">{value.date_formatted}</div>
                  <div className="card-title">{value.title}</div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    );
  }
}
