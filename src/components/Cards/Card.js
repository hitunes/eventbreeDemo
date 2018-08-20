import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Modal } from "antd";
import {
  shareOnTwitter,
  shareOnPinterest,
  shareOnFacebook,
  shareOnGooglePlus,
  shareOnLinkedIn,
  shareOnWhatsapp,
  shareWithMail,
  facebookShare,
  twitterShare,
  linkedinShare,
  googleplusShare,
  pinterestShare,
  whatsappShare,
  emailShare
} from "../../helpers.js";

class Card extends Component {
  state = {
    modal2Visible: false
  };

  setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible });
  }
  onChange = checkedValues => {
    console.log("checked = ", checkedValues);
  };

  Toggler = card => {
    console.log(card);
  };
  render() {
    let { card, history, likeImg, likeImgToggler } = this.props;
    return (
      <div className="card" onClick={() => this.Toggler(card)}>
        <div className="card-image">
          <img src={card.image} alt="check" />
          <div className="card-details">
            <div
              className="card-title"
              onClick={() => history.push(`/${card.category.slug}/${card.id}`)}
            >
              {card.title}
            </div>
            <div className="card-title-btns">
              <span onClick={likeImgToggler}>
                <img
                  src={likeImg}
                  alt="like"
                  width="20px"
                  height="20px"
                  style={{ marginRight: "8px" }}
                />
                12
              </span>
              <span>
                <div onClick={() => this.setModal2Visible(true)}>
                  <img
                    src="https://static.eventbree.com/trends/images/svg/share-icon.svg"
                    alt="share"
                    width="20px"
                    height="20px"
                    style={{ marginRight: "8px" }}
                  />
                </div>
                <Modal
                  title="Share on..."
                  centered
                  visible={this.state.modal2Visible}
                  onOk={() => this.setModal2Visible(false)}
                  onCancel={() => this.setModal2Visible(false)}
                  footer={null}
                >
                  <span className="sharebtn__wrapper">
                    <span onClick={() => shareOnFacebook(card.share.url)}>
                      <img
                        src={facebookShare}
                        alt="face"
                        width="32px"
                        height="32px"
                      />
                    </span>
                    <span onClick={() => shareOnTwitter(card.share.url)}>
                      <img
                        src={twitterShare}
                        alt="twitter"
                        width="32px"
                        height="32px"
                      />
                    </span>
                    <span
                      onClick={() =>
                        shareOnLinkedIn(card.share.url, card.title)
                      }
                    >
                      <img
                        src={linkedinShare}
                        alt="linkedin"
                        width="32px"
                        height="32px"
                      />
                    </span>
                    <span onClick={() => shareOnGooglePlus(card.share.url)}>
                      <img
                        src={googleplusShare}
                        alt="G+"
                        width="32px"
                        height="32px"
                      />
                    </span>
                    <span
                      onClick={() =>
                        shareOnPinterest(card.share.url, card.image)
                      }
                    >
                      <img
                        src={pinterestShare}
                        alt="pin"
                        width="32px"
                        height="32px"
                      />
                    </span>
                    <span
                      onClick={() =>
                        shareOnWhatsapp(card.share.url, "check this out")
                      }
                    >
                      <img
                        src={whatsappShare}
                        alt="whatsapp"
                        width="32px"
                        height="32px"
                      />
                    </span>
                    <span
                      onClick={() => shareWithMail(card.share.url, card.title)}
                    >
                      <img
                        src={emailShare}
                        alt="email"
                        width="32px"
                        height="32px"
                      />
                    </span>
                  </span>
                </Modal>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Card);
