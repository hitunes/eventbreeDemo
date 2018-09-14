import React from "react";
import { Card, Spin, Icon, Input, Breadcrumb } from "antd";
import { blog_links } from "../../config.js";
import { Link, withRouter } from "react-router-dom";
import "./Blog.css";

const Search = Input.Search;

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
export const BlogLinks = ({ viewSearch, match }) => {
  return (
    <div className="blog__links">
      {blog_links.map((links, index) => (
        <div key={index}>
          <Link className="blog__links-tags" to={`${match.url}/${links.url}`}>
            {links.title}
          </Link>
        </div>
      ))}
      <Icon type="search" onClick={viewSearch} />
    </div>
  );
};
const breadcrumbNameMap = {
  "/blog": "Blog",
  "/blog/event": "Event",
  "/blog/real-events": "Real Events",
  "/blog/suppliers-insight": "Supplier's Insight",
  "/apps/videos": "Videos"
};
export const Latest = withRouter(props => {
  const {
    location,
    loadingMore,
    onPaginatedSearch,
    viewSearch,
    searchBlog,
    handleSearch,
    isOpen,
    cardDetails,
    match
  } = props;
  const pathSnippets = location.pathname.split("/").filter(i => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });
  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">Eventbree</Link>
    </Breadcrumb.Item>
  ].concat(extraBreadcrumbItems);
  return (
    <div className="blog__wrapper">
      <div>
        <BlogLinks viewSearch={viewSearch} match={match} />

        <BlogSearch
          searchBlog={searchBlog}
          handleSearch={handleSearch}
          isOpen={isOpen}
        />
      </div>
      <div className="blog__jumbotron">
        <Breadcrumb className="blog__jumbotron-breadcrumb">
          {breadcrumbItems}
        </Breadcrumb>
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
      <div className="clickMe" onChange={onPaginatedSearch}>
        {loadingMore ? <Spin size="small" /> : <span>Show More</span>}
      </div>
    </div>
  );
});
