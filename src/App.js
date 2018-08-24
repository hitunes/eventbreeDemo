import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
//api
import { API_URL } from "./config";
import {
  handleResponse,
  mobileLeftSide,
  mobileRightSide,
  webLeftSide,
  webRightSide
} from "./helpers.js";
//api
//redux
// import { Provider } from "react-redux";
// import store from "./store";
//redux
import {
  FrontPageTitle,
  GlobalPageTitle,
  NavLinks
} from "./components/Header/Header";
import CardGroup from "./components/Cards/CardGroup";
import { Sidebar } from "./components/Aside/Sidebar";
import SearchInput from "./components/Search/Search";
import DetailPage from "./components/CardDetail/DetailPage";
import Footer from "./components/Footer/Footer";
import "antd/dist/antd.css";
import "./App.css";

class App extends Component {
  page = 1;
  state = {
    sidebarOpen: false,
    trends: [],
    searchables: [],
    history: [],
    loading: true,
    loadingMore: false,
    error: "",
    searchTrends: "",
    value: ""
  };
  onChange = e => {
    this.state.value({
      value: e.target.value
    });
  };
  handleViewSidebar = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  };

  updateLikes = cardId => {
    let trendingCards = [...this.state.trends];
    trendingCards.forEach(card => {
      if (card.id === cardId && card.like === false) {
        card.like = !card.like;
      }
      this.setState((prevState, props) => {
        return {
          trends: trendingCards
        };
      });
    });
    // if () {
    //   if (!this.state.updated) {
    //     this.setState((prevState, props) => {
    //       return {
    //
    //       };
    //     });
    //   } else {
    //     this.setState((prevState, props) => {
    //       return {
    //         likes: prevState.likes - 1
    //       };
    //     });
    //   }
    // }
  };
  handleSearch = e => {
    this.setState({ searchTrends: e.target.value });
  };

  trendsApi = page => {
    this.setState({ loadingMore: true });
    fetch(`${API_URL}/?page=${page}`)
      .then(handleResponse)
      .then(data => {
        const trendsInfo = data.data;
        const newTrends = trendsInfo.forEach(trend => {
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
      })
      .catch(error => {
        this.setState({ error: error.errorMessage, loading: true });
      });
  };
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
            <Route
              exact
              path="/"
              render={() => (
                <div className="maincontent__page-wrapper">
                  <GlobalPageTitle />
                  <FrontPageTitle />
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
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

// <Provider store={store}> </Provider>;
