import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { handleView } from "./helpers.js";
import { FrontPageTitle, GlobalPageTitle } from "./components/Header/Header";
import NavLinks from "./components/Header/Header";
import CardGroup from "./components/Cards/CardGroup";
import Sidebar from "./components/Aside/Sidebar";
import SearchInput from "./components/Search/Search";
import DetailPage from "./components/CardDetail/DetailPage";
import Slug from "./components/SlugDetail/Slug";
import Footer from "./components/Footer/Footer";
import LandingPage from "./components/Landing/Landing";
import { Blog } from "./components/Blog/Blog";
import BlogDetail from "./components/Blog/BlogDetail";
import { connect } from "react-redux";
import { fetchTrends } from "./store/actions/trendActions";
import "antd/dist/antd.css";
import "./App.css";

class App extends Component {
  page = 1;
  state = {
    searchTrends: "",
    value: "",
    loading: true
  };
  componentDidMount() {
    this.props.fetchTrends(this.page);
  }
  handleSearch = e => {
    this.setState({ searchTrends: e.target.value });
  };
  onChange = e => {
    this.state.value({
      value: e.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            {handleView()}
            <NavLinks />
            <Sidebar />
            <Route exact path="/home" component={LandingPage} />
            <div>
              <Route
                path="/"
                render={props => (
                  <Blog {...props} onPaginatedSearch={this.onPaginatedSearch} />
                )}
              />
              <Route
                path="/blog-detail"
                render={props => (
                  <BlogDetail {...props} loadingMore={this.state.loadingMore} />
                )}
              />
            </div>
            <Route
              exact
              path="/trends"
              render={() => (
                <div className="maincontent__page-wrapper">
                  <GlobalPageTitle>Eventbree Trends...</GlobalPageTitle>
                  <FrontPageTitle>
                    Inspirations and ideas for your events based on popular
                    trends
                  </FrontPageTitle>
                  <SearchInput
                    searchTrends={this.state.searchTrends}
                    handleSearch={this.handleSearch}
                  />
                  <CardGroup
                    onChange={this.onChange}
                    searchTrends={this.state.searchTrends}
                  />
                </div>
              )}
            />
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
