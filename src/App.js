import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
//api
import { API_URL } from "./config";
import {
  mobileLeftSide,
  mobileRightSide,
  webLeftSide,
  webRightSide
} from "./helpers.js";
import {
  FrontPageTitle,
  GlobalPageTitle,
  NavLinks
} from "./components/Header/Header";
import CardGroup from "./components/Cards/CardGroup";
import { Sidebar } from "./components/Aside/Sidebar";
import SearchInput from "./components/Search/Search";
import DetailPage from "./components/CardDetail/DetailPage";
import Slug from "./components/SlugDetail/Slug";
import Footer from "./components/Footer/Footer";
import "antd/dist/antd.css";
import "./App.css";
import LandingPage from "./components/Landing/Landing";
import Blog from "./components/Blog/Blog";
import BlogDetail from "./components/Blog/BlogDetail";

class App extends Component {
  page = 1;
  state = {
    sidebarOpen: false,
    searchOpen: false,
    trends: [],
    loading: true,
    loadingMore: false,
    error: "",
    searchTrends: "",
    value: ""
  };
  // TODO: example FIXME:
  onChange = e => {
    this.state.value({
      value: e.target.value
    });
  };
  handleViewSidebar = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  };
  viewSearch = () => {
    this.setState({ searchOpen: !this.state.searchOpen });
    console.log("clicked");
  };

  updateLikes = cardId => {
    let trendingCards = [...this.state.trends];
    trendingCards.forEach(card => {
      if (card.id === cardId && card.like === false) {
        card.like = !card.like;
        (async () => {
          await fetch(`${API_URL}/${cardId}/like`, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            }
          });
          this.setState((prevState, props) => {
            card.stats.likes++;
            return {
              trends: trendingCards
            };
          });
        })();
      }
    });
  };
  handleSearch = e => {
    this.setState({ searchTrends: e.target.value });
  };
  async trendsApi(page) {
    this.setState({ loadingMore: true });
    try {
      let response = await fetch(`${API_URL}/?page=${page}`);
      let responseJson = await response.json();
      const trendsInfo = responseJson.data;
      trendsInfo.forEach(trend => {
        if (trend.like === undefined) {
          trend.like = trend.like ? true : false;
        }
      });
      this.setState({
        loading: false,
        loadingMore: false,
        trends:
          this.state.trends.length > 0
            ? [...this.state.trends, ...trendsInfo]
            : trendsInfo
      });
    } catch (error) {
      this.setState({ error: error.errorMessage, loading: true });
    }
  }
  componentDidMount() {
    this.trendsApi(this.page);
  }
  onPaginatedSearch = e => {
    e.preventDefault();
    this.page += 1;
    this.trendsApi(this.page);
  };
  render() {
    return (
      <div className="App">
        {window.innerWidth < 769 ? (
          <div>
            <img
              className="mobile-img-left side-img"
              src={mobileLeftSide}
              alt="left-design"
            />
            <img
              className="mobile-img-right side-img"
              src={mobileRightSide}
              alt="right-design"
            />
          </div>
        ) : (
          <div>
            <img
              className="img-right side-img"
              src={webLeftSide}
              alt="left-design"
            />
            <img
              className="img-left side-img"
              src={webRightSide}
              alt="right-design"
            />
          </div>
        )}
        <BrowserRouter>
          <div>
            <NavLinks handleViewSidebar={this.handleViewSidebar} />
            <Sidebar
              isOpen={this.state.sidebarOpen}
              handleViewSidebar={this.handleViewSidebar}
            />
            <Route exact path="/" component={LandingPage} />
            <div>
              <Route
                exact
                path="/blog"
                render={() => (
                  <Blog
                    isOpen={this.state.searchOpen}
                    loadingMore={this.state.loadingMore}
                    onPaginatedSearch={this.onPaginatedSearch}
                    viewSearch={this.viewSearch}
                    searchBlog={this.state.searchTrends}
                    handleSearch={this.handleSearch}
                  />
                )}
              />
              <Route
                exact
                path="/blog-detail"
                render={() => (
                  <BlogDetail loadingMore={this.state.loadingMore} />
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
                    loading={this.state.loading}
                  />
                  <CardGroup
                    loading={this.state.loading}
                    loadingMore={this.state.loadingMore}
                    cardsInfo={this.state.trends}
                    searchTrends={this.state.searchTrends}
                    likeImg={this.state.likeImg}
                    likes={this.state.likes}
                    updated={this.state.updated}
                    updateLikes={this.updateLikes}
                    onChange={this.onChange}
                    onPaginatedSearch={this.onPaginatedSearch}
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

export default App;
