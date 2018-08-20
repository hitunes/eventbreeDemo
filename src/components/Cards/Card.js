import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Popup from "reactjs-popup";
import { Modal } from "antd";
import {
  shareOnTwitter,
  shareOnPinterest,
  shareOnFacebook,
  shareOnGooglePlus,
  shareOnLinkedIn,
  shareOnWhatsapp,
  shareWithMail,
  facebookShare,
  twitterShare,
  linkedinShare,
  googleplusShare,
  pinterestShare,
  whatsappShare,
  emailShare
} from "../../helpers.js";

// const ModalPop = params => {
//   return (
//     <div>
//       <Button type="primary" onClick={() => this.setModal1Visible(true)}>
//         Display a modal dialog at 20px to Top
//       </Button>
//       <Modal
//         title="20px to Top"
//         style={{ top: 20 }}
//         visible={this.state.modal1Visible}
//         onOk={() => this.setModal1Visible(false)}
//         onCancel={() => this.setModal1Visible(false)}
//       >
//         <p>some contents...</p>
//         <p>some contents...</p>
//         <p>some contents...</p>
//       </Modal>
//       <br />
//       <br />
//       <Button type="primary" onClick={() => this.setModal2Visible(true)}>
//         Vertically centered modal dialog
//       </Button>
//       <Modal
//         title="Vertically centered modal dialog"
//         centered
//         visible={this.state.modal2Visible}
//         onOk={() => this.setModal2Visible(false)}
//         onCancel={() => this.setModal2Visible(false)}
//       >
//         <p>some contents...</p>
//         <p>some contents...</p>
//         <p>some contents...</p>
//       </Modal>
//     </div>
//   );
// };
class Card extends Component {
  state = {
    modal2Visible: false
  };

  setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible });
  }
  onChange = checkedValues => {
    console.log("checked = ", checkedValues);
  };

  Toggler = card => {
    console.log(card);
  };
  render() {
    let {
      card,
      history,
      likeImg,
      // likeCounter,
      likeImgToggler
    } = this.props;
    return (
      <div className="card" onClick={() => this.Toggler(card)}>
        <div className="card-image">
          <img src={card.image} alt="check" />
          <div className="card-details">
            <div
              className="card-title"
              onClick={() => history.push(`/${card.category.slug}/${card.id}`)}
            >
              {card.title}
            </div>
            <div className="card-title-btns">
              <span onClick={likeImgToggler}>
                <img
                  src={likeImg}
                  alt="like"
                  width="20px"
                  height="20px"
                  style={{ marginRight: "8px" }}
                />
                12
              </span>
              <span>
                <Popup
                  trigger={open => (
                    <img
                      src="https://static.eventbree.com/trends/images/svg/share-icon.svg"
                      alt="share"
                      width="20px"
                      height="20px"
                      style={{ marginRight: "8px" }}
                    />
                  )}
                  position="top center"
                  closeOnDocumentClick
                >
                  <span>
                    <span onClick={() => shareOnFacebook(card.share.url)}>
                      <img
                        src={facebookShare}
                        alt="face"
                        width="24px"
                        height="24px"
                      />
                    </span>
                    <span onClick={() => shareOnTwitter(card.share.url)}>
                      <img
                        src={twitterShare}
                        alt="twitter"
                        width="24px"
                        height="24px"
                      />
                    </span>
                    <span
                      onClick={() =>
                        shareOnLinkedIn(card.share.url, card.title)
                      }
                    >
                      <img
                        src={linkedinShare}
                        alt="linkedin"
                        width="24px"
                        height="24px"
                      />
                    </span>
                    <span onClick={() => shareOnGooglePlus(card.share.url)}>
                      <img
                        src={googleplusShare}
                        alt="G+"
                        width="24px"
                        height="24px"
                      />
                    </span>
                    <span
                      onClick={() =>
                        shareOnPinterest(card.share.url, card.image)
                      }
                    >
                      <img
                        src={pinterestShare}
                        alt="pin"
                        width="24px"
                        height="24px"
                      />
                    </span>
                    <span
                      onClick={() =>
                        shareOnWhatsapp(card.share.url, "check this out")
                      }
                    >
                      <img
                        src={whatsappShare}
                        alt="whatsapp"
                        width="24px"
                        height="24px"
                      />
                    </span>
                    <span
                      onClick={() => shareWithMail(card.share.url, card.title)}
                    >
                      <img
                        src={emailShare}
                        alt="email"
                        width="24px"
                        height="24px"
                      />
                    </span>
                  </span>
                </Popup>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Card);
