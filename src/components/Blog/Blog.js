import React from "react";
import { Route } from "react-router-dom";

import { Latest } from "./Latest";
import { Event } from "./Event";
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
export const Blog = ({
  match,
  loadingMore,
  onPaginatedSearch,
  searchBlog,
  handleSearch
}) => {
  return (
    <div>
      <Route
        exact
        path={match.url}
        render={props => (
          <Latest
            {...props}
            match={match}
            cardDetails={cardDetails}
            loadingMore={loadingMore}
            onPaginatedSearch={onPaginatedSearch}
            viewSearch={viewSearch}
            searchBlog={store.getState().blog.searchBlog}
            handleSearch={handleSearch}
            isOpen={store.getState().blog.searchOpen}
          />
        )}
      />
      <Route
        exact
        path={`${match.path}/event`}
        render={props => (
          <Event
            {...props}
            cardDetails={cardDetails}
            loadingMore={loadingMore}
            onPaginatedSearch={onPaginatedSearch}
            viewSearch={viewSearch}
            searchBlog={searchBlog}
            handleSearch={handleSearch}
            isOpen={store.getState().blog.searchOpen}
          />
        )}
      />
    </div>
  );
};
const mapStateToProps = state => ({
  blog: state.blog.searchOpen
});
export default connect(
  mapStateToProps,
  { toggleSearch }
)(Blog);
