import "./Slug.css";

import { connect } from "react-redux";
import React, { Component } from "react";
import Masonry from "react-masonry-component";

import { Modal } from "antd";
import { fetchClass } from "../../store/actions/classificationsActions";
import { updateClassLikes } from "../../store/actions/classificationsActions";
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

import { GlobalPageTitle, FrontPageTitle } from "../Header/Header";
class Slug extends Component {
  state = {
    slugTitle: "",
    modal2Visible: false
  };
  setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible });
  }
  updateLikes = cardId => {
    this.props.updateClassLikes(cardId);
  };
  componentDidMount() {
    const slugCategory = this.props.match.params.classification;
    const slugUid = this.props.match.params.uid;
    this.props.fetchClass(slugCategory, slugUid);
    window.scrollTo(0, 0);
    this.setState({
      slugTitle: slugUid
    });
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      const slugUid = this.props.match.params.uid;
      const slugCategory = this.props.match.params.classification;
      this.props.fetchClass(slugCategory, slugUid);
    }
  }

  render() {
    let { history, classifications } = this.props;
    let { slugTitle } = this.state;
    return (
      <div className="slugpage__wrapper">
        <GlobalPageTitle>Showing Trends for {slugTitle}</GlobalPageTitle>
        <FrontPageTitle>
          we have {classifications.slug.length} trends for {slugTitle}
        </FrontPageTitle>
        <Masonry className={"slugpage__container"} key={new Date().getTime()}>
          {classifications.slug.map((card, index) => (
            <div className="card">
              <div className="card-img">
                <img src={card.image.url} alt="check" />
                <div className="card-details">
                  <div
                    className="card-title"
                    onClick={() =>
                      history.push(`/${card.category.slug}/${card.uid}`)
                    }
                  >
                    {card.title}
                  </div>
                  <div className="card-title-btns">
                    <span onClick={() => this.updateLikes(card.uid)}>
                      <img
                        src={
                          card.like === true
                            ? "https://static.eventbree.com/trends/images/svg/heart-icon-red.svg"
                            : "https://static.eventbree.com/trends/images/svg/heart-icon-white.svg"
                        }
                        alt="like"
                        width="20px"
                        height="20px"
                        style={{ marginRight: "8px" }}
                      />
                      {card.stats.likes}
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
                          <span
                            onClick={() => shareOnGooglePlus(card.share.url)}
                          >
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
                            onClick={() =>
                              shareWithMail(card.share.url, card.title)
                            }
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
          ))}
        </Masonry>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  classifications: state.classifications.allClassifications
});
export default connect(
  mapStateToProps,
  { fetchClass, updateClassLikes }
)(Slug);
