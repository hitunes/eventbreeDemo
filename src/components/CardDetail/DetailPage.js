import React, { Component } from "react";
import { API_URL } from "../../config";
import { Link } from "react-router-dom";
import {
  handleResponse,
  formatter,
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
  emailShare,
  quotes
} from "../../helpers.js";
import "./DetailPage.css";
import Loader from "./Loader";

export default class DetailPage extends Component {
  state = {
    card: {
      id: null,
      category: {},
      culture: {},
      event_type: {},
      content: []
    },
    loading: true,
    similar: [],
    meta: [],
    links: [],
    error: ""
  };
  componentDidMount() {
    const cardId = this.props.match.params.id;
    this.fetchCard(cardId);
    console.log(cardId);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      // Get id from new url params
      const cardId = this.props.match.params.id;
      // Fetch card
      this.fetchCard(cardId);
    }
  }

  fetchCard(cardId) {
    fetch(`${API_URL}/${cardId}`)
      .then(handleResponse)
      .then(card => {
        const cards = card.data;
        const similar = card.similar.data;
        const meta = card.meta;
        const links = card.links;
        this.setState({
          loading: false,
          card: cards,
          similar: similar,
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
    let { card, similar, loading } = this.state;
    if (loading) {
      return (
        <div>
          <Loader />
        </div>
      );
    }
    return (
      <div className="detailpage__wrapper">
        {/* <div className="advert-here">
          <div className="advert-here-box">ADS</div>
        </div> */}
        <Link to="/" className="detailpage__back-btn">
          <span>Back</span>
        </Link>
        <div className="card__detailpage__wrapper">
          <div className="detailpage__title">{card.title}</div>
          <div className="detailpage__slug-title">
            <span>{card.category.name}</span>
            <span>{card.culture.name}</span>
            <span>{card.event_type.name}</span>
          </div>
          <div className="detailpage__share-btn">
            Share
            <span>
              <span onClick={() => shareOnFacebook(card.share.url)}>
                <img
                  src={facebookShare}
                  alt="face"
                  width="24px"
                  height="24px"
                />
              </span>
              <span onClick={() => shareOnTwitter(card.share.url)}>
                <img
                  src={twitterShare}
                  alt="twitter"
                  width="24px"
                  height="24px"
                />
              </span>
              <span onClick={() => shareOnLinkedIn(card.share.url, card.title)}>
                <img
                  src={linkedinShare}
                  alt="linkedin"
                  width="24px"
                  height="24px"
                />
              </span>
              <span onClick={() => shareOnGooglePlus(card.share.url)}>
                <img
                  src={googleplusShare}
                  alt="G+"
                  width="24px"
                  height="24px"
                />
              </span>
              <span
                onClick={() => shareOnPinterest(card.share.url, card.image)}
              >
                <img
                  src={pinterestShare}
                  alt="pin"
                  width="24px"
                  height="24px"
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
                  width="24px"
                  height="24px"
                />
              </span>
              <span onClick={() => shareWithMail(card.share.url, card.title)}>
                <img src={emailShare} alt="email" width="24px" height="24px" />
              </span>
            </span>
          </div>
        </div>
        <div>
          <div>{formatter(card.content)}</div>
          <div className="blockquote">
            <div>
              <img src={quotes} alt="" />
            </div>
            <p className="blockquote__quote">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
              maxime eius odio rerum earum tempore elit. accusamus voluptates
              labore dolorum eligendi.
            </p>
            <p className="blockquote__author">Itunu</p>
          </div>
        </div>
        <div className="card__similar-trend">
          <p className="card__similar-trend-title">Related Trends</p>
          <div className="card__similar-trend-img">
            {similar.map((value, index) => (
              <div className="card__similar-image" key={index} style={{}}>
                <a href={value.share.url}>
                  <img src={value.image} alt="similar-trends" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
