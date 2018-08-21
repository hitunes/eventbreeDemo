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
  state = {
    sidebarOpen: false,
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
  onChange = e => {
    this.state.value({
      value: e.target.value
    });
  };
  handleViewSidebar = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  };
  likeImgToggler = e => {
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
        this.setState({ error: error.errorMessage, loading: true });
      });
    fetch(`${API_URL}/?all`)
      .then(handleResponse)
      .then(data => {
        const searchTrends = data.data;
        this.setState({
          searchables: [...this.state.searchables, ...searchTrends]
        });
      })
      .catch(error => {
        this.setState({ error: error.errorMessage, loading: true });
      });
  };

  componentDidMount() {
    this.trendsApi();
  }
  onPaginatedSearch = e => {
    e.preventDefault();
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));
    this.trendsApi();
  };

  render() {
    console.log(this.state.searchables);
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
                    cardsInfo={this.state.trends}
                    searchTrends={this.state.searchTrends}
                    likeImg={this.state.likeImg}
                    likeCounter={this.state.likeCounter}
                    likeImgToggler={this.likeImgToggler}
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
