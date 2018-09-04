import React, { Component } from "react";
import { BlogLinks } from "./Blog";
import "./BlogDetail.css";

export default class BlogDetail extends Component {
  render() {
    return (
      <div className="blog__wrapper">
        <BlogLinks />
        <div className="blog__jumbotron">
          <img
            className="blog__jumbotron-bg"
            src="images/jumbotron.jpg"
            alt="jumbotron"
          />
        </div>
        <div className="blog__body">
          <div className="blog__body-share-btn">Share</div>
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
              <span>4.0</span>
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
      </div>
    );
  }
}
