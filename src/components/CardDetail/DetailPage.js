import "./DetailPage.css";

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {
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
  emailShare
} from "../../helpers.js";

import Loader from "./Loader";
import { Modal, Button } from "antd";
import { fetchTrend } from "../../store/actions/trendActions";

class DetailPage extends Component {
  state = {
    modal2Visible: false
  };
  setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible });
  }
  componentDidMount() {
    const slug = this.props.match.params.id;
    this.props.fetchTrend(slug);
    window.scrollTo(0, 0);
  }

  render() {
    let { selectedTrend } = this.props;
    if (selectedTrend.loading) {
      return (
        <div>
          <Loader />
        </div>
      );
    }
    return (
      <div className="detailpage__wrapper">
        <Link to="/trends" className="detailpage__back-btn">
          <span>Back</span>
        </Link>
        <div className="advert-here">
          <div className="advert-here-box">
            <img
              src={selectedTrend.card.ads[0].image.url}
              alt={selectedTrend.card.ads[0].image.alt}
            />
            <div className="advert__title">
              {selectedTrend.card.ads[0].cta.text}
            </div>
            <div className="advert__description">
              {selectedTrend.card.ads[0].cta.text}
            </div>
            <a
              href={selectedTrend.card.ads[0].cta.url}
              target="_blank"
              className="advert__button_link"
            >
              <Button>{selectedTrend.card.ads[0].cta.text}</Button>
            </a>
          </div>
        </div>
        <div className="card__detailpage__wrapper">
          <div className="detailpage__title">{selectedTrend.card.title}</div>
          <div className="detailpage__summary">
            {selectedTrend.card.summary}
          </div>
          <div className="detailpage__slug-title">
            <span>{selectedTrend.card.category.name}</span>
            <span>{selectedTrend.card.culture.name}</span>
            <span>{selectedTrend.card.event_type.name}</span>
          </div>
          <span>
            <div
              className="detailpage__share-btn"
              onClick={() => this.setModal2Visible(true)}
            >
              Share
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
                <span
                  onClick={() => shareOnFacebook(selectedTrend.card.share.url)}
                >
                  <img
                    src={facebookShare}
                    alt="face"
                    width="32px"
                    height="32px"
                  />
                </span>
                <span
                  onClick={() => shareOnTwitter(selectedTrend.card.share.url)}
                >
                  <img
                    src={twitterShare}
                    alt="twitter"
                    width="32px"
                    height="32px"
                  />
                </span>
                <span
                  onClick={() =>
                    shareOnLinkedIn(
                      selectedTrend.card.share.url,
                      selectedTrend.card.title
                    )
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
                  onClick={() =>
                    shareOnGooglePlus(selectedTrend.card.share.url)
                  }
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
                    shareOnPinterest(
                      selectedTrend.card.share.url,
                      selectedTrend.card.image
                    )
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
                    shareOnWhatsapp(
                      selectedTrend.card.share.url,
                      "check this out"
                    )
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
                    shareWithMail(
                      selectedTrend.card.share.url,
                      selectedTrend.card.title
                    )
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
        <div>
          <div key={selectedTrend.card.title}>
            {formatter(selectedTrend.card.content)}
          </div>
        </div>
        <div className="card__similar-trend">
          <p className="card__similar-trend-title">Related Trends</p>
          <div className="card__similar-trend-img">
            {selectedTrend.similar.map((value, index) => (
              <div className="card__similar-image" key={index} style={{}}>
                <a href={value.share.url}>
                  <img src={value.image.url} alt="similar-trends" />
                </a>
                <div>{value.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedTrend: state.trends.selectedTrend,
  trends: state.trends.allTrends
});

export default connect(
  mapStateToProps,
  { fetchTrend }
)(DetailPage);
