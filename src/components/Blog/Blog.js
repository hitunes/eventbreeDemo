import React, { Component } from "react";
import { blog_links } from "../../config.js";
import { Card, Spin, Icon, Input } from "antd";
import "./Blog.css";

const Search = Input.Search;

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
export const BlogLinks = ({ viewSearch }) => {
  return (
    <div className="blog__links">
      {blog_links.map((links, index) => (
        <span key={index} onClick={this.onChange}>
          <a className="blog__links-tags" href={links.url}>
            {links.title}
          </a>
        </span>
      ))}
      <Icon type="search" onClick={viewSearch} />
    </div>
  );
};
const BlogSearch = ({ searchBlog, handleSearch, isOpen }) => {
  let searchOpen = isOpen ? "search open" : "search";
  return (
    <Search
      className={searchOpen}
      value={searchBlog}
      prefix={
        <Icon
          type="search"
          style={{
            color: "rgba(0,0,0,.25)",
            fontSize: "18px"
          }}
        />
      }
      placeholder="Search for Blog"
      onChange={handleSearch}
      onSearch={value => console.log(value)}
    />
  );
};

export default class Blog extends Component {
  render() {
    let {
      loadingMore,
      onPaginatedSearch,
      viewSearch,
      searchBlog,
      handleSearch,
      isOpen
    } = this.props;
    return (
      <div className="blog__wrapper">
        <div>
          <BlogLinks viewSearch={viewSearch} />
          <BlogSearch
            searchBlog={searchBlog}
            handleSearch={handleSearch}
            isOpen={isOpen}
          />
        </div>
        <div className="blog__jumbotron">
          <img
            className="blog__jumbotron-bg"
            src="images/jumbotron.jpg"
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
              cover={<img alt="blog-card" src={card.img} height="269px" />}
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
