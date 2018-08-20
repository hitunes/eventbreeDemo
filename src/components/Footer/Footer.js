import React, { Component } from "react";
import { Icon, Button } from "antd";
import "./Footer.css";
export default class Footer extends Component {
  render() {
    return (
      <div className="footer__container">
        {window.innerWidth > 769 ? (
          <div>
            <div className="footer__head-wrapper">
              <div className="footer__logo">
                <img
                  src="https://static.eventbree.com/trends/images/png/logo-header.png"
                  alt="footer"
                  width="106px"
                  height="45px"
                />
              </div>
              <div className="footer__links-right">Become a supply partner</div>
            </div>
            <span className="footer__connect-icons">
              <span>
                <Icon type="facebook" />
              </span>
              <span>
                <Icon type="twitter" />
              </span>
              <span>
                <Icon type="instagram" />
              </span>
              <span>
                <Icon type="medium" />
              </span>
              <span>
                <Icon type="wechat" />
              </span>
              <span>
                <Icon type="youtube" />
              </span>
              <span>
                <Icon type="linkedin" />
              </span>
            </span>
            <div className="footer__links">
              <div className="footer__links-left">
                <span>Helpdesk</span>
                <span>Academy</span>
                <span>Contact Us</span>
              </div>
            </div>
            <div className="footer__copyrights">
              <span className="copyright-year">© 2018</span>
              <span className="copyright-title">
                Eventbree is a product of Tedbree Limited.
              </span>
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
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
              <span>Helpdesk</span>
              <span>Academy</span>
              <span>Contact Us</span>
              <span className="footer__connect-icons">
                <span>
                  <Icon type="facebook" />
                </span>
                <span>
                  <Icon type="twitter" />
                </span>
                <span>
                  <Icon type="instagram" />
                </span>
                <span>
                  <Icon type="medium" />
                </span>
                <span>
                  <Icon type="wechat" />
                </span>
                <span>
                  <Icon type="youtube" />
                </span>
                <span>
                  <Icon type="linkedin" />
                </span>
              </span>
            </div>
            <div className="mobilefooter__copyrights">
              <span className="copyright-year">© 2018</span>
              <span className="copyright-title">
                Eventbree is a product of Tedbree Limited.
              </span>
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        )}
      </div>
    );
  }
}
