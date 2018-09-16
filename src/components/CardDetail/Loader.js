import React, { Component } from "react";
import "./Loader.css";

export default class Loader extends Component {
  render() {
    return (
      <div className="loader-wrapper">
        <div className="loader-contents">
          <div style={{ height: "18px", width: "30%", marginBottom: "10px" }} />
          <div style={{ height: "18px", width: "40%", marginBottom: "10px" }} />
          <span className="loader__slug" style={{ marginBottom: "10px" }}>
            <div style={{ height: "8px", width: "10%" }} />
            <div style={{ height: "8px", width: "10%" }} />
            <div style={{ height: "8px", width: "10%" }} />
          </span>
          <div style={{ height: "12px", width: "70%", marginBottom: "5px" }} />
          <div style={{ height: "12px", width: "70%", marginBottom: "5px" }} />
          <div style={{ height: "12px", width: "70%", marginBottom: "5px" }} />
          <div style={{ height: "12px", width: "70%", marginBottom: "5px" }} />
          <div style={{ height: "12px", width: "70%", marginBottom: "5px" }} />
        </div>
        <div className="loader-cards">
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className="loader-contents">
          <div style={{ height: "12px", width: "70%", marginBottom: "5px" }} />
          <div style={{ height: "12px", width: "70%", marginBottom: "5px" }} />
          <div style={{ height: "12px", width: "70%", marginBottom: "5px" }} />
          <div style={{ height: "12px", width: "70%", marginBottom: "5px" }} />
          <div style={{ height: "12px", width: "70%", marginBottom: "5px" }} />
          <div style={{ height: "12px", width: "70%", marginBottom: "5px" }} />
          <div style={{ height: "12px", width: "70%", marginBottom: "5px" }} />
          <div style={{ height: "12px", width: "70%", marginBottom: "5px" }} />
          <div style={{ height: "12px", width: "70%", marginBottom: "5px" }} />
          <div style={{ height: "12px", width: "70%", marginBottom: "5px" }} />
          <div style={{ height: "12px", width: "70%", marginBottom: "5px" }} />
          <div style={{ height: "12px", width: "70%", marginBottom: "5px" }} />
        </div>
        <div className="loader-cards showmore">
          <div />
          <div />
          <div />
        </div>
      </div>
    );
  }
}
