import React, { Component } from "react";
import { API_URL } from "../../config";
import Masonry from "react-masonry-component";
import { withRouter } from "react-router-dom";
import { Modal } from "antd";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import {
  handleResponse,
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
import "./Slug.css";
import { GlobalPageTitle, FrontPageTitle } from "../Header/Header";

export default class Slug extends Component {
  state = {
    loading: false,
    slug: [],
    meta: [],
    links: {},
    length: 0,
    slugTitle: ""
  };
  componentDidMount() {
    const slugId = this.props.match.params.id;
    const slugCategory = this.props.match.params.classification;
    const slugUid = this.props.match.params.uid;
    this.fetchslug(slugId, slugCategory);
    window.scrollTo(0, 0);
    this.setState({
      slugTitle: slugUid
    });
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      // Get id from new url params
      const slugId = this.props.match.params.id;
      const slugCategory = this.props.match.params.classification;
      // Fetch slug
      this.fetchslug(slugId, slugCategory);
    }
  }

  fetchslug(slugId, slugCategory) {
    fetch(`${API_URL}/${slugCategory}/${slugId}`)
      .then(handleResponse)
      .then(slug => {
        console.log(slug);
        const slugs = slug.data;
        const meta = slug.meta;
        const links = slug.links;
        const length = slug.data.length;
        this.setState({
          loading: false,
          slug: slugs,
          length: length,
          meta: meta,
          links: links
        });
      })
      .catch(error => {
        this.setState({
          error: error.errorMessage,
          loading: true
        });
      });
  }

  render() {
    let { history, updateLikes } = this.props;
    let { slug, loading, length, slugTitle } = this.state;
    return (
      <div className="slugpage__wrapper">
        <GlobalPageTitle>
          Showing Trends for
          <span className="slugpage__title">{slugTitle}</span>
        </GlobalPageTitle>
        <FrontPageTitle>
          we have {length} trends for
          <span className="slugpage__title">{slugTitle}</span>
        </FrontPageTitle>
        <Masonry className={"slugpage__container"} key={new Date().getTime()}>
          {slug.map((card, index) => (
            <div className="card">
              <div className="card-image">
                <img src={card.image.url} alt="check" />
                <div className="card-details">
                  <div
                    className="card-title"
                    onClick={() =>
                      history.push(`/${card.category.slug}/${card.id}`)
                    }
                  >
                    {card.title}
                  </div>
                  <div className="card-title-btns">
                    <span onClick={() => updateLikes(card.id)}>
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
