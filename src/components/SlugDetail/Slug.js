import React, { Component } from "react";
import { API_URL } from "../../config";
import { Modal } from "antd";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import "./Slug.css";
import { GlobalPageTitle, FrontPageTitle } from "../Header/Header";

export default class DetailPage extends Component {
  setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible });
  }
  componentDidMount() {
    const slugId = this.props.match.params.id;
    // this.fetchslug(slugId);
    window.scrollTo(0, 0);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      // Get id from new url params
      const slugId = this.props.match.params.id;
      // Fetch slug
      // this.fetchslug(slugId);
    }
  }

  // fetchslug(slugId) {
  //   fetch(`${API_URL}/${slugId}`)
  //     .then(handleResponse)
  //     .then(slug => {
  //       const slugs = slug.data;
  //       const similar = slug.similar.data;
  //       const meta = slug.meta;
  //       const links = slug.links;
  //       this.setState({
  //         loading: false,
  //         slug: slugs,
  //         similar: similar,
  //         meta: meta,
  //         links: links
  //       });
  //     })
  //     .catch(error => {
  //       this.setState({
  //         error: error.errorMessage,
  //         loading: true
  //       });
  //     });
  // }

  render() {
    // let { slug, similar, loading } = this.state;
    // if (loading) {
    //   return (
    //     <div>
    //       <Loader />
    //     </div>
    //   );
    // }
    return (
      <div className="slugpage__wrapper">
        <GlobalPageTitle>Showing Trends for Page</GlobalPageTitle>
        <FrontPageTitle>we have 563n trends for cake</FrontPageTitle>
      </div>
    );
  }
}
