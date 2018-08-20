import React, { Component } from "react";
import "./Loader.css";

export default class Loader extends Component {
  render() {
    return (
      <div className="loader-wrapper">
        <div className="loader-contents">
          <div style={{ height: "18px" }} />
          <div style={{ height: "18px", width: "50%", marginBottom: "15px" }} />
          <span className="loader__slug" style={{ marginBottom: "5px" }}>
            <div />
            <div />
            <div />
          </span>
          <div style={{ height: "8px", width: "10%", marginBottom: "5px" }} />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className="loader-cards">
          <div />
          <div />
          <div />
        </div>
      </div>
    );
  }
}
