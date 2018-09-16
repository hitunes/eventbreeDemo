import React, { Component } from "react";
import { socials, helps, terms } from "./../../config";
import { FooterLinksTitleUrl, FooterLinksTitleIcon } from "./../../helpers";
import "./Footer.css";
import { logoHeader } from "../../helpers";
export default class Footer extends Component {
  render() {
    return (
      <div className="footer__container">
        {window.innerWidth > 769 ? (
          <div>
            <div className="footer__head-wrapper">
              <div className="footer__logo">
                <img
                  src={logoHeader}
                  alt="footer"
                  width="146px"
                  height="35px"
                />
              </div>
              <div className="footer__links-right">Become a supply partner</div>
            </div>
            {FooterLinksTitleIcon(socials)}
            <div className="footer__links-left">
              {FooterLinksTitleUrl(helps)}
            </div>
            <div className="footer__links-terms">
              {FooterLinksTitleUrl(terms)}
            </div>

            <div className="footer__copyrights">
              <span className="copyright-year">© 2018</span>
              <span className="copyright-title">
                Eventbree is a product of Tedbree Limited.
              </span>
            </div>
          </div>
        ) : (
          <div>
            <div className="mobilefooter__head-wrapper">
              <div className="footer__logo">
                <img
                  src="https://static.eventbree.com/trends/images/png/logo-header.png"
                  alt="footer"
                  width="106px"
                  height="45px"
                />
              </div>
              <div className="mobilefooter__links-right">
                Become a supply partner
              </div>
            </div>
            <div className="mobile-footer__links">
              {FooterLinksTitleUrl(helps)}
              {FooterLinksTitleIcon(socials)}
            </div>
            <div className="mobilefooter__copyrights">
              <span className="copyright-year">© 2018</span>
              <span className="copyright-title">
                Eventbree is a product of Tedbree Limited.
              </span>
              {FooterLinksTitleUrl(terms)}
            </div>
          </div>
        )}
      </div>
    );
  }
}
