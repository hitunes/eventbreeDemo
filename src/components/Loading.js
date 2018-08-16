import React, { Component } from "react";
import "./Loading.css";

export default class Loading extends Component {
  render() {
    return (
      <div className="loading-wrapper">
        <div className="loading-cards">
          <div />
          <div />
          <div />
        </div>
        <div className="loading-cards">
          <div />
          <div />
          <div />
        </div>
        <div className="loading-cards">
          <div />
          <div />
          <div />
        </div>
      </div>
    );
  }
}
