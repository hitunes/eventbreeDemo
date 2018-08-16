import React, { Component } from "react";
import { Icon, Button } from "antd";
import "./Footer.css";
export default class Footer extends Component {
  render() {
    return (
      <div className="footer__container">
        <div className="footer__logo">
          <img
            src="https://static.eventbree.com/trends/images/svg/Logofooter.png"
            alt="footer"
            width="106px"
            height="35px"
          />
        </div>
        {window.innerWidth > 769 ? (
          <div>
            <div className="footer__links">
              <div className="footer__links-left">
                <span>Helpdesk</span>
                <span>Academy</span>
              </div>
              <div className="footer__links-right">
                <Button>Contact Us</Button>
                <Button>Become a supply partner</Button>
              </div>
            </div>
            <div className="footer__connect">
              <span className="footer__connect-title">Connect with Us:</span>
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
            <div className="footer__copyrights">
              <span className="copyright-year">2018</span>
              <span className="copyright-title">
                Eventbree is a product of Tedbree Limited.
              </span>
              <span className="copyright-links">
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
              </span>
            </div>
          </div>
        ) : (
          <div>
            <div className="mobile-footer__links">
              <span>Helpdesk</span>
              <span>Academy</span>
              <span>Contact Us</span>
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <div className="footer__connect">
                <span className="footer__connect-title">Connect with Us:</span>
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
            </div>
            <div className="footer__copyrights">
              <span className="copyright-year">2018</span>
              <span className="copyright-title">
                Eventbree is a product of Tedbree Limited.
              </span>
            </div>
          </div>
        )}
      </div>
    );
  }
}
