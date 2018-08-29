import React, { Component } from "react";
import { GlobalPageTitle, FrontPageTitle } from "../Header/Header";
import { Button } from "antd";
import "./Landing.css";

export default class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page__wrapper">
        <div className="landing-page__title">
          <GlobalPageTitle>
            All You Need To Plan Your Next Event...
          </GlobalPageTitle>
          <FrontPageTitle>Download the Eventbree App!</FrontPageTitle>
        </div>
        <div className="landing-page__download-btn">
          <Button className="landing-page__download-iphone">
            <span className="landing-page__download-iphone-image">
              <img src="images/apple-logo.png" alt="" />
            </span>
            <div className="landing-page__download-iphone-text">
              <span>Download on the</span>
              <span>App Store</span>
            </div>
          </Button>
          <Button className="landing-page__download-android">
            <span className="landing-page__download-android-image">
              <img src="images/google-play.png" alt="" />
            </span>
            <div className="landing-page__download-android-text">
              <span>Get it on</span>
              <span>Google Play</span>
            </div>
          </Button>
        </div>
        <div className="landing-page__bg1">
          <img src="images/FirstRectangle.png" alt="bg1" />
        </div>
        <div className="landing-page__phone">
          <img src="images/5.png" alt="phone" />
        </div>
        <div className="landing-page__bg2">
          <img src="images/Middle.png" alt="bg2" />
        </div>
        <div className="landing-page__bg3">
          <img src="images/SecondDots.png" alt="bg2" />
        </div>
        <div className="landing-page__features">
          <span className="landing-page__features-title">Our Features</span>
          <div className="landing-page__feature-btns">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    );
  }
}
