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
import debounce from "lodash/debounce";
import {
  FrontPageTitle,
  GlobalPageTitle,
  NavLinks,
  Aside
} from "./components/Header/Header";
import CardGroup from "./components/Cards/CardGroup";
import SearchInput from "./components/Search/Search";
import DetailPage from "./components/CardDetail/DetailPage";
import Footer from "./components/Footer/Footer";
import "antd/dist/antd.css";
import "./App.css";

let currentTrend = {};
let placedTrend = [];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trends: [],
      searchables: [],
      history: [],
      counter: 1,
      loading: true,
      error: "",
      searchTrends: "",
      likeImg:
        "https://static.eventbree.com/trends/images/svg/heart-icon-white.svg",
      likeCounter: 1,
      value: ""
    };
    // this.Scroller = debounce(this.Scroller, 150);
  }
  onChange = e => {
    this.state.value({
      value: e.target.value
    });
  };
  likeImgToggler = e => {
    currentTrend = {
      ...this.state.trends,
      value: e.target.value
    };
    let history = this.state.history;
    placedTrend.push(currentTrend.id);
    this.setState({ history: placedTrend });
    console.log(history, currentTrend, this.state.history);
    //else {
    //   let checkIndex = 0;
    //   let trendChecker = placedTrend.filter((bet, index) => {
    //     checkIndex = index;
    //     return bet.matchId === currentMatch.matchId;
    //   });
    this.setState({
      likeImg:
        "https://static.eventbree.com/trends/images/svg/heart-icon-red.svg",
      likeCounter: this.state.likeCounter + 1
    });
  };
  handleSearch = e => {
    this.setState({ searchTrends: e.target.value });
  };
  trendsApi = () => {
    fetch(`${API_URL}/?page=${this.state.counter}`)
      .then(handleResponse)
      .then(data => {
        const trendsInfo = data.data;
        this.setState({
          loading: false,
          trends:
            this.state.trends.length > 0
              ? [...this.state.trends, ...trendsInfo]
              : trendsInfo
        });
      })
      .catch(error => {
        this.setState({
          error: error.errorMessage,
          loading: true
        });
      });
  };
  // onSetResult = (result, page) =>
  //   page === 0
  //     ? this.setState(applySetResult(result))
  //     : this.setState(applyUpdateResult(result));
  // searchAll = (url, size) => {
  //   url === null
  //     ? null
  //     : fetch(`${API_URL}/all?`)
  //         .then(handleResponse)
  //         .then(data => {
  //           const searchInfo = data.data;
  //           this.setState({
  //             searchables: [...this.state.searchables, ...searchInfo]
  //           });
  //         });
  // };
  componentDidMount() {
    this.trendsApi();
    // this.searchAll();
    window.addEventListener("scroll", this.Scroller, false);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.Scroller, false);
  }
  // Scroller = (window.scroll = () => {
  //   let scrollLoad = true;
  //   if (window.scrollTop() >= document.Height() - window.Height() - 10) {
  //     scrollLoad = false;
  //     this.setState({ counter: this.state.counter + 1 });
  //     this.trendsApi();
  //   }
  // });
  // Scroller = (window.onscroll = () => {
  //   if (
  //     window.innerHeight + window.scrollY >=
  //     document.body.offsetHeight - 700
  //   ) {
  //     this.setState({ counter: this.state.counter + 1 });
  //     this.trendsApi();
  //   }
  // });
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
            <NavLinks />
            <Aside />
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
                    cardsInfo={this.state.trends}
                    searchTrends={this.state.searchTrends}
                    likeImg={this.state.likeImg}
                    likeCounter={this.state.likeCounter}
                    likeImgToggler={this.likeImgToggler}
                    onChange={this.onChange}
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
