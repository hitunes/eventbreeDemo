import React, { Component } from "react";
import { API_URL } from "../../config";

import {
  handleResponse,
  shareOnTwitter,
  shareOnPinterest,
  shareOnFacebook,
  shareOnGooglePlus,
  shareOnLinkedIn,
  shareOnWhatsapp,
  shareWithMail
} from "../../helpers.js";
import "./DetailPage.css";

export default class DetailPage extends Component {
  state = {
    card: {
      id: null,
      category: {},
      culture: {},
      event_type: {},
      content: []
    },
    similar: [],
    meta: [],
    links: [],
    error: ""
  };
  componentDidMount() {
    const cardId = this.props.match.params.id;
    this.fetchCard(cardId);
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
          card: cards,
          similar: similar,
          meta: meta,
          links: links
        });
      })
      .catch(error => {
        this.setState({
          error: error
        });
      });
  }

  formatter(content) {
    let that = this;
    return content.map((value, index) => {
      switch (value.type) {
        case "text":
          return (
            <div className="content__text-wrapper">
              {that.formatText(value.content)}
            </div>
          );
          break;
        case "video":
          return that.formatVideo(value.content);
          break;
        case "image_with_caption":
          return (
            <div className="content__image-wrapper">
              {that.formatImg(value.content)}
            </div>
          );
          break;
        case "quote":
          return that.formatBlockquote(value.content);
          break;
        default:
          return <p>"Hello"</p>;
      }
    });
  }

  formatText(content) {
    return content.map((value, index) => {
      switch (value.type) {
        case "paragragh":
          return (
            <div>
              <p>{value.text}</p>
            </div>
          );
          break;
        case "heading1":
          return <h1>{value.text}</h1>;
          break;
        case "heading2":
          return <h2>{value.text}</h2>;
          break;
        case "heading3":
          return <h3>{value.text}</h3>;
          break;
        case "heading4":
          return <h4>{value.text}</h4>;
          break;
        case "heading5":
          return <h5>{value.text}</h5>;
          break;
        case "heading6":
          return <h6>{value.text}</h6>;
          break;
        case "embed":
          return <embed>{value.text}</embed>;
          break;
        case "list-item":
          return <ul>(value.text.map(value => value.text))</ul>;
          break;
        case "o-list-item":
          return <ol>(value.text.map(value => value.text))</ol>;
          break;
        case "image":
          return <img src={value.url} alt="" />;
          break;
        case "preformatted":
          return <pre>{value.text}</pre>;
          break;
        case "strong":
          return <strong>{value.text}</strong>;
          break;
        case "em":
          return <em>{value.text}</em>;
          break;
        case "label":
          return <label>{value.text}</label>;
          break;
        default:
          return value.text;
      }
    });
  }
  formatVideo(content) {
    return (
      <div class="plyr__video-embed" id="player">
        <iframe
          width={content.width}
          height={content.height}
          src={content.embed_url}
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          feature="oembed"
        />
      </div>
    );
  }
  formatImg(content) {
    return (
      <div className="card__img-wrapper">
        <div className="card__summary-image">
          <img src={content.url} alt={content.caption} />
        </div>
      </div>
    );
  }
  formatBlockquote(content) {
    return (
      <div className="blockquote">
        <div>"</div>
        <p className="blockquote__quote">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
          maxime eius odio rerum earum tempore elit. accusamus voluptates labore
          dolorum eligendi.
        </p>
        <p className="blockquote__author">Itunu</p>
      </div>
    );
  }
  render() {
    let { card, similar, meta, links } = this.state;
    return (
      <div className="detailpage__wrapper">
        {/* <div className="advert-here">
          <div className="advert-here-box">ADS</div>
        </div> */}
        <div className="card__detailpage__wrapper">
          <div className="detailpage__title">{card.title}</div>
          <div className="detailpage__slug-title">
            <span>{card.category.name}</span>
            <span>{card.culture.name}</span>
            <span>{card.event_type.name}</span>
          </div>
          <div className="detailpage__share-btn">
            Share:
            <span>
              <span onClick={() => shareOnFacebook(card.share.url)}>
                <img
                  src="https://static.eventbree.com/trends/images/png/facebook-share-icon.png"
                  alt="face"
                  width="24px"
                  height="24px"
                />
              </span>
              <span onClick={() => shareOnTwitter(card.share.url)}>
                <img
                  src="https://static.eventbree.com/trends/images/png/twitter-share-icon.png"
                  alt="twitter"
                  width="24px"
                  height="24px"
                />
              </span>
              <span onClick={() => shareOnLinkedIn(card.share.url, card.title)}>
                <img
                  src="images/linkedin.svg"
                  alt="linkedin"
                  width="24px"
                  height="24px"
                />
              </span>
              <span onClick={() => shareOnGooglePlus(card.share.url)}>
                <img
                  src="images/google-plus.svg"
                  alt="g+"
                  width="24px"
                  height="24px"
                />
              </span>
              <span
                onClick={() => shareOnPinterest(card.share.url, card.image)}
              >
                <img
                  src="https://static.eventbree.com/trends/images/png/pinterest-share-icon.png"
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
                  src="https://static.eventbree.com/trends/images/png/whatsapp-share.png"
                  alt="whatsapp"
                  width="24px"
                  height="24px"
                />
              </span>
              <span onClick={() => shareWithMail(card.share.url, card.title)}>
                <img
                  src="images/email.svg"
                  alt="email"
                  width="24px"
                  height="24px"
                />
              </span>
            </span>
          </div>
        </div>
        <div>
          <div>{this.formatter(card.content)}</div>
          <div className="blockquote">
            <div>"</div>
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
