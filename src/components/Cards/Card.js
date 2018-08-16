import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Popup from "reactjs-popup";
import {
  shareOnTwitter,
  shareOnPinterest,
  shareOnFacebook,
  shareOnGooglePlus,
  shareOnLinkedIn,
  shareOnWhatsapp,
  shareWithMail
} from "../../helpers.js";
class Card extends Component {
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
                        src="https://static.eventbree.com/trends/images/png/facebook-share-icon.png"
                        alt="face"
                        width="24px"
                        height="24px"
                      />
                    </span>
                    <span onClick={() => shareOnTwitter(card.share.url)}>
                      <img
                        src="https://static.eventbree.com/trends/images/png/twitter-share-icon.png"
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
                        src="images/linkedin.svg"
                        alt="twitter"
                        width="24px"
                        height="24px"
                      />
                    </span>
                    <span onClick={() => shareOnGooglePlus(card.share.url)}>
                      <img
                        src="images/google-plus.svg"
                        alt="insta"
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
                        src="https://static.eventbree.com/trends/images/png/pinterest-share-icon.png"
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
                        src="https://static.eventbree.com/trends/images/png/whatsapp-share.png"
                        alt="whatsapp"
                        width="24px"
                        height="24px"
                      />
                    </span>
                    <span
                      onClick={() => shareWithMail(card.share.url, card.title)}
                    >
                      <img
                        src="images/email.svg"
                        alt="whatsapp"
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
