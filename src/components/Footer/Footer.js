import React, { Component } from "react";
import { Icon, Button } from "antd";
import { socials, helps, terms } from "./../../config";
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
            <span className="footer__connect-icons">
              {socials.map((links, index) => (
                <span key={index}>
                  <a href={links.url} target="_blank">
                    <Icon type={links.icon} />
                  </a>
                </span>
              ))}
            </span>
            <div className="footer__links-left">
              {helps.map((links, index) => (
                <span key={index}>
                  <a href={links.url} target="_blank">
                    {links.title}
                  </a>
                </span>
              ))}
            </div>
            <div className="footer__copyrights">
              <span className="copyright-year">© 2018</span>
              <span className="copyright-title">
                Eventbree is a product of Tedbree Limited.
              </span>
              {terms.map((links, index) => (
                <span key={index}>
                  <a href={links.url} target="_blank">
                    <span>{links.title}</span>
                  </a>
                </span>
              ))}
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
              {helps.map((links, index) => (
                <span key={index}>
                  <a href={links.url} target="_blank">
                    {links.title}
                  </a>
                </span>
              ))}
              <span className="footer__connect-icons">
                {socials.map((links, index) => (
                  <span key={index}>
                    <a href={links.url} target="_blank">
                      <Icon type={links.icon} />
                    </a>
                  </span>
                ))}
              </span>
            </div>
            <div className="mobilefooter__copyrights">
              <span className="copyright-year">© 2018</span>
              <span className="copyright-title">
                Eventbree is a product of Tedbree Limited.
              </span>
              {terms.map((links, index) => (
                <span key={index}>
                  <a href={links.url} target="_blank">
                    <span>{links.title}</span>
                  </a>
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}
