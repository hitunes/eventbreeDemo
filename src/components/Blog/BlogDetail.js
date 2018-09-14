import React, { Component } from "react";
import { Card, Icon, Modal } from "antd";
import { blog_links } from "../../config.js";
import { Link } from "react-router-dom";
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
import "./BlogDetail.css";
import { connect } from "react-redux";
import { toggleSearch } from "../../store/actions/blogActions";
import store from "../../store";

function viewSearch() {
  store.dispatch(toggleSearch());
}

const cardDetails = [
  {
    img: "images/1.jpg",
    author: "Adekoya Itunu",
    title: "How to create a Customer Messaging Platform like Intercom",
    details:
      "The digital age is hitting the pet care industry. In this article we take a look at the features that can help you build a trustworthy on-demand dog walking platform"
  },
  {
    img: "images/2.jpg",
    author: "Adekoya Itunu",
    title: "How to create a Customer Messaging Platform like Intercom",
    details:
      "The digital age is hitting the pet care industry. In this article we take a look at the features that can help you build a trustworthy on-demand dog walking platform"
  },
  {
    img: "images/3.jpg",
    author: "Adekoya Itunu",
    title: "How to create a Customer Messaging Platform like Intercom",
    details:
      "The digital age is hitting the pet care industry. In this article we take a look at the features that can help you build a trustworthy on-demand dog walking platform"
  }
];
const rate = [
  { id: 1, title: "Don't Like", emoji: "/images/smiley/Sad 1.svg" },
  { id: 2, title: "Hmmmm", emoji: "/images/smiley/Pondering.svg" },
  { id: 3, title: "I like this", emoji: "/images/smiley/Grin 2.svg" },
  { id: 4, title: "Interesting", emoji: "/images/smiley/Blushing 2.svg" },
  { id: 5, title: "WOW", emoji: "/images/smiley/Heart Eyes.svg" }
];

const BlogLinks = () => {
  return (
    <div className="blog__links">
      {blog_links.map((links, index) => (
        <div key={index} onClick={this.onChange}>
          <Link className="blog__links-tags" to={`blog/${links.url}`}>
            {links.title}
          </Link>
        </div>
      ))}
      <Icon type="search" onClick={viewSearch} />
    </div>
  );
};
class BlogDetail extends Component {
  state = { modal2visible: false, ratings: 0 };
  setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible });
  }
  sharer = (sharefunction, sharesrc, sharealt) => {
    return (
      <span onClick={() => sharefunction}>
        <img src={sharesrc} alt={sharealt} width="32px" height="32px" />
      </span>
    );
  };
  handleRating = rate => {
    this.setState({ ratings: rate });
  };
  render() {
    return (
      <div className="blog__wrapper">
        <BlogLinks  />
        <div className="blog__jumbotron blog-detail">
          <img
            className="blog__jumbotron-bg"
            src="images/jumbotron.jpg"
            alt="jumbotron"
          />
          <div className="blog-detail__jumbotron-details">
            <div className="blog__jumbotron-details-bread" />
            <div className="blog__jumbotron-details-title">
              How to speed up your ruby on Rails App
            </div>
            <div className="blog__jumbotron-details-img">
              <img src="images/avatar.jpg" alt="avatar" />
            </div>
            <div className="blog__jumbotron-details-author">
              Temidayo Aiyedona
            </div>
            <div className="blog__jumbotron-details-author-title">Writer</div>
          </div>
        </div>
        <div className="blog__body">
          <span>
            <div
              className="blog__body-share-btn"
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
                {this.sharer(() => shareOnFacebook(), facebookShare, "face")}
                {this.sharer(() => shareOnTwitter(), twitterShare, "twitter")}
                {this.sharer(
                  () => shareOnLinkedIn(),
                  linkedinShare,
                  "linkedin"
                )}
                {this.sharer(() => shareOnGooglePlus(), googleplusShare, "G+")}
                {this.sharer(
                  () => shareOnPinterest(),
                  pinterestShare,
                  "pinterest"
                )}
                {this.sharer(
                  () => shareOnWhatsapp(),
                  whatsappShare,
                  "whatsapp"
                )}
                {this.sharer(() => shareWithMail(), emailShare, "email")}
              </span>
            </Modal>
          </span>
          <div className="blog__body-title">
            We’ve already discussed why choosing the Ruby on Rails framework for
            your app is a good idea. Ruby on Rails (or RoR) is extremely popular
            as it speeds up development. This framework provides developers with
            a great collection of libraries. <br />
            <br />
            But just choosing Ruby on Rails doesn’t mean your project will
            succeed. To meet users’ expectations, your Ruby on Rails app should
            be fast. What do we mean by fast? A study by Akami shows that over
            half of internet users expect a website to load within two seconds.
            And around three-quarters of web users won’t return to a website if
            it takes longer than four seconds to load. Speed really matters. The
            performance of an application is crucial, as it plays an important
            role in making your web application successful. Poor performance can
            decrease an app’s ratings . <br />
            <br />
            We’ve already discussed why choosing the Ruby on Rails framework for
            your app is a good idea. Ruby on Rails (or RoR) is extremely popular
            as it speeds up development. This framework provides developers with
            a great collection of libraries. <br />
            <br />
            But just choosing Ruby on Rails doesn’t mean your project will
            succeed. To meet users’ expectations, your Ruby on Rails app should
            be fast. What do we mean by fast? A study by Akami shows that over
            half of internet users expect a website to load within two seconds.
            And around three-quarters of web users won’t return to a website if
            it takes longer than four seconds to load. Speed really matters. The
            performance of an application is crucial, as it plays an important
            role in making your web application successful. Poor performance can
            decrease an app’s ratings .
          </div>
          <div className="blog__body-rating">
            <div>
              <span>{this.state.ratings}</span>
              /5.0 Article rating
            </div>
            <div>89 Reviews</div>
          </div>
          <div className="blog__body-rating-title">
            Please what's your reaction after reading this article. Select any
            of the emoji's that best represent how you felt after reading this
            article
          </div>
        </div>
        <div className="blog__rate-wrapper">
          {rate.map((value, id) => (
            <div
              className="blog__rate"
              key={value.id}
              onClick={() => this.handleRating(value.id)}
            >
              <img src={value.emoji} alt="" width="25px" height="25px" />
              <div style={{ marginLeft: "10px" }}>{value.title}</div>
            </div>
          ))}
        </div>
        <div className="blog__subscribe">Subscribe to get stories</div>
        <div className="blog__card-wrapper">
          {cardDetails.map((card, index) => (
            <Card
              key={index}
              className="blog__card"
              hoverable
              cover={<img alt="blog-card" src={card.img} height="269px" />}
            >
              <div className="blog__card-author">{card.author}</div>
              <div className="blog__card-title">{card.title}</div>
              <div className="blog__card-details">{card.details}</div>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  blog: state.blog.searchOpen
});
export default connect(
  mapStateToProps,
  { toggleSearch }
)(BlogDetail);