import React, { Component } from "react";
import { blog_links } from "../../config.js";
import { Card, Spin } from "antd";
import "./Blog.css";

const { Meta } = Card;
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
  },
  {
    img: "images/4.jpg",
    author: "Adekoya Itunu",
    title: "How to create a Customer Messaging Platform like Intercom",
    details:
      "The digital age is hitting the pet care industry. In this article we take a look at the features that can help you build a trustworthy on-demand dog walking platform"
  },
  {
    img: "images/5.jpg",
    author: "Adekoya Itunu",
    title: "How to create a Customer Messaging Platform like Intercom",
    details:
      "The digital age is hitting the pet care industry. In this article we take a look at the features that can help you build a trustworthy on-demand dog walking platform"
  },
  {
    img: "images/6.jpg",
    author: "Adekoya Itunu",
    title: "How to create a Customer Messaging Platform like Intercom",
    details:
      "The digital age is hitting the pet care industry. In this article we take a look at the features that can help you build a trustworthy on-demand dog walking platform"
  },
  {
    img: "images/7.jpg",
    author: "Adekoya Itunu",
    title: "How to create a Customer Messaging Platform like Intercom",
    details:
      "The digital age is hitting the pet care industry. In this article we take a look at the features that can help you build a trustworthy on-demand dog walking platform"
  },
  {
    img: "images/8.jpg",
    author: "Adekoya Itunu",
    title: "How to create a Customer Messaging Platform like Intercom",
    details:
      "The digital age is hitting the pet care industry. In this article we take a look at the features that can help you build a trustworthy on-demand dog walking platform"
  },
  {
    img: "images/9.jpg",
    author: "Adekoya Itunu",
    title: "How to create a Customer Messaging Platform like Intercom",
    details:
      "The digital age is hitting the pet care industry. In this article we take a look at the features that can help you build a trustworthy on-demand dog walking platform"
  },
  {
    img: "images/10.jpg",
    author: "Adekoya Itunu",
    title: "How to create a Customer Messaging Platform like Intercom",
    details:
      "The digital age is hitting the pet care industry. In this article we take a look at the features that can help you build a trustworthy on-demand dog walking platform"
  },
  {
    img: "images/11.jpg",
    author: "Adekoya Itunu",
    title: "How to create a Customer Messaging Platform like Intercom",
    details:
      "The digital age is hitting the pet care industry. In this article we take a look at the features that can help you build a trustworthy on-demand dog walking platform"
  },
  {
    img: "images/12.jpg",
    author: "Adekoya Itunu",
    title: "How to create a Customer Messaging Platform like Intercom",
    details:
      "The digital age is hitting the pet care industry. In this article we take a look at the features that can help you build a trustworthy on-demand dog walking platform"
  }
];
export default class Blog extends Component {
  render() {
    let { loadingMore, onPaginatedSearch } = this.props;
    return (
      <div className="blog__wrapper">
        <div className="blog__links">
          {blog_links.map((links, index) => (
            <span key={index} onClick={this.onChange}>
              <a className="blog__links-tags" href={links.url}>
                {links.title}
              </a>
            </span>
          ))}
        </div>
        <div className="blog__jumbotron">
          <img
            className="blog__jumbotron-bg"
            src="images/jumbo.jpg"
            alt="jumbotron"
          />
          <div className="blog__jumbotron-text-wrapper">
            <div className="blog__jumbotron-title">
              How to speed up your ruby on Rails App
            </div>
            <div className="blog__jumbotron-details">
              The digital age is hitting the pet care industry. In this article,
              we take a look at the features that can help you build a trust
              worthy on-demand dog walking platform.
            </div>
          </div>
        </div>
        <div className="blog__card-wrapper">
          {cardDetails.map((card, index) => (
            <Card
              key={index}
              className="blog__card"
              hoverable
              cover={<img alt="example" src={card.img} height="269px" />}
            >
              <div className="blog__card-author">{card.author}</div>
              <div className="blog__card-title">{card.title}</div>
              <div className="blog__card-details">{card.details}</div>
            </Card>
          ))}
        </div>
        <div className="clickMe" onClick={onPaginatedSearch}>
          {loadingMore ? <Spin size="small" /> : <span>Show More</span>}
        </div>
      </div>
    );
  }
}
