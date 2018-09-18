import "./App.css";
import "antd/dist/antd.css";
import { handleView } from "./helpers.js";

import Loadable from "react-loadable";
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchTrends } from "./store/actions/trendActions";

const Loading = () => <div>Loading...</div>;

const Footer = Loadable({
  loader: () => import("./components/Footer/Footer"),
  loading: () => Loading
});

const NavLinks = Loadable({
  loader: () => import("./components/Header/Header"),
  loading: () => Loading
});

const CardGroup = Loadable({
  loader: () => import("./components/Cards/CardGroup"),
  loading: () => Loading
});

const Sidebar = Loadable({
  loader: () => import("./components/Aside/Sidebar"),
  loading: () => Loading
});

const DetailPage = Loadable({
  loader: () => import("./components/CardDetail/DetailPage"),
  loading: () => Loading
});

const Slug = Loadable({
  loader: () => import("./components/SlugDetail/Slug"),
  loading: () => Loading
});

class App extends Component {
  page = 1;
  state = {
    headerShadow: "white",
    navBtn: "nav__button-wrapper"
  };
  componentDidMount() {
    this.props.fetchTrends(this.page);
    this.Window();
  }
  Window = () =>
    window.addEventListener("scroll", () => {
      // if (window.scrollY > 0) {
      //   this.setState({ headerShadow: "showShadow", navBtn: "d-nav-btn" });
      // } else {
      //   this.setState({
      //     headerShadow: "white",
      //     navBtn: "nav__button-wrapper"
      //   });
      // }
    });
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            {handleView()}
            <NavLinks
              headerShadow={this.state.headerShadow}
              navBtn={this.state.navBtn}
            />
            <Sidebar />
            <Route exact path="/" component={CardGroup} />
            <Route exact path="/:category/:id" component={DetailPage} />
            <Route exact path="/:classification/:id/:uid" component={Slug} />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default connect(
  null,
  { fetchTrends }
)(App);
