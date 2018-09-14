import React, { Component } from "react";
import { Modal } from "antd";
import { Link } from "react-router-dom";
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
import "./DetailPage.css";
import Loader from "./Loader";
import { connect } from "react-redux";
import { fetchTrend } from "../../store/actions/trendActions";
import store from "../../store";
import _filter from "lodash/filter";
import _isEmpty from "lodash/isEmpty";

class DetailPage extends Component {
  state = {
    modal2Visible: false
  };
  setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible });
  }
  componentDidMount() {
    const slug = this.props.match.params.id;
    if (_isEmpty(store.getState().trends.allTrends.items)) {
      setTimeout(() => {
        this.fetIt(slug);
      }, 3000);
    } else {
      this.fetIt(slug);
    }
    window.scrollTo(0, 0);
  }

  fetIt(slug) {
    const cardId = _filter(store.getState().trends.allTrends.items, function(
      trend
    ) {
      return trend.uid === slug;
    })[0].id;
    this.props.fetchTrend(cardId);

    return cardId;
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
        <Link to="/" className="detailpage__back-btn">
          <span>Back</span>
        </Link>
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
