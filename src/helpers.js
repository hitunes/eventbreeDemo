import React from "react";
import Plyr from "react-plyr";
import { Button, Icon } from "antd";

/**
 * Fetch response helper
 *
 * @param {object} response
 */
export const FooterLinksTitleUrl = array => {
  return (
    <React.Fragment>
      {array.map((links, index) => (
        <div key={index}>
          <a href={links.url} target="_blank">
            {links.title}
          </a>
        </div>
      ))}
    </React.Fragment>
  );
};
export const FooterLinksTitleIcon = array => {
  return (
    <div className="footer__connect-icons">
      {array.map((links, index) => (
        <span key={index}>
          <a href={links.url} target="_blank">
            <Icon type={links.icon} />
          </a>
        </span>
      ))}
    </div>
  );
};
const data = {
  twitter: {
    shareUrl: "https://twitter.com/intent/tweet/",
    text: "Check this out",
    url: "https://trends.eventbree.com",
    hashtags: "eventbree,trends",
    via: ""
  },
  pinterest: {
    shareUrl: "https://www.pinterest.com/pin/create/button/",
    params: {
      url: "https://trends.eventbree.com",
      media: "image",
      description: "Check this out"
    }
  },
  whatsapp: {
    shareUrl: "whatsapp://send",
    text: "Check this out ",
    url: "https://trends.eventbree.com"
  },
  facebook: {
    shareUrl: "https://www.facebook.com/sharer/sharer.php",
    u: "https://trends.eventbree.com",
    text: "Check it out"
  },
  googleplus: {
    shareUrl: "https://plus.google.com/share",
    params: {
      url: ""
    }
  },
  linkedin: {
    shareUrl: "https://www.linkedin.com/shareArticle",
    url: "",
    mini: true,
    text: "Check it out",
    domain: "eventbree.com"
  },
  email: {
    shareUrl: "mailto:",
    params: {
      subject: "check this out",
      body: "check it out "
    }
  }
};
export const shareOnTwitter = url => {
  let shareurl = `${data.twitter.shareUrl}?text=${
    data.twitter.text
  }&url=${url}&hashtags=${data.twitter.hashtags}`;
  createPopup(shareurl);
};
export const shareOnPinterest = (url, media) => {
  let shareurl = `${
    data.pinterest.shareUrl
  }?url=${url}&media=${media}&description=${data.pinterest.params.description}`;
  createPopup(shareurl);
};
export const shareOnFacebook = url => {
  let shareurl = `${data.facebook.shareUrl}?u=${url}&p[title]=${
    data.facebook.text
  }`;
  createPopup(shareurl);
};
export const shareOnGooglePlus = url => {
  let shareurl = `${data.googleplus.shareUrl}?url=${url}`;
  createPopup(shareurl);
};
export const shareOnLinkedIn = (url, title) => {
  let shareurl = `${
    data.linkedin.shareUrl
  }?mini=true&url=${url}&title=${title}&summary=${data.linkedin.text}&source=${
    data.linkedin.domain
  }`;
  createPopup(shareurl);
};
export const shareOnWhatsapp = (url, title) => {
  let shareurl = `${data.whatsapp.shareUrl}?text=${data.whatsapp.text}`;
  forwardLink(shareurl);
};
export const shareWithMail = (url, title) => {
  let shareurl = `${data.whatsapp.shareUrl}?subject=${
    data.email.params.subject
  }&body=${data.email.params.body}${title}${url}`;
  forwardLink(shareurl);
};

function createPopup(shareurl) {
  let popWidth = 600,
    popHeight = 480,
    left = window.innerWidth / 2 - popWidth / 2 + window.screenX,
    top = window.innerHeight / 2 - popHeight / 2 + window.screenY,
    popParams =
      "scrollbars=no, width=" +
      popWidth +
      ", height=" +
      popHeight +
      ", top=" +
      top +
      ", left=" +
      left,
    newWindow = window.open(shareurl, "", popParams);
  if (window.focus) {
    newWindow.focus();
  }
}

function forwardLink(shareurl) {
  window.location.href = shareurl;
}
export const handleResponse = response => {
  return response.json().then(json => {
    if (response.ok) {
      return json;
    } else {
      return Promise.reject(json);
    }
  });
};

// detailpage content build
export const formatter = content => {
  return content.map((value, index) => {
    switch (value.type) {
      case "text":
        return (
          <div className="content__text-wrapper">
            {formatText(value.content)}
          </div>
        );
      case "video":
        return formatVideo(value.content);

      case "image_with_caption":
        return (
          <div className="content__image-wrapper">
            {formatImg(value.content)}
          </div>
        );

      case "quote":
        return formatBlockquote(value.content);

      case "banner_with_caption":
        return formatBanner(value.content);

      default:
        return <p />;
    }
  });
};

function formatText(content) {
  return content.map((value, index) => {
    switch (value.type) {
      case "paragragh":
        return (
          <div>
            <p>{value.text}</p>
          </div>
        );

      case "heading1":
        return <h1>{value.text}</h1>;

      case "heading2":
        return <h2>{value.text}</h2>;

      case "heading3":
        return <h3>{value.text}</h3>;

      case "heading4":
        return <h4>{value.text}</h4>;

      case "heading5":
        return <h5>{value.text}</h5>;

      case "heading6":
        return <h6>{value.text}</h6>;

      case "embed":
        return <embed>{value.text}</embed>;

      case "list-item":
        return <ul>(value.text.map(value => value.text))</ul>;

      case "o-list-item":
        return <ol>(value.text.map(value => value.text))</ol>;

      case "image":
        return <img src={value.url} alt="" />;

      case "preformatted":
        return <pre>{value.text}</pre>;

      case "strong":
        return <strong>{value.text}</strong>;

      case "em":
        return <em>{value.text}</em>;

      case "label":
        return <label>{value.text}</label>;

      default:
        return value.text;
    }
  });
}
function formatVideo(content) {
  return (
    <Plyr
      type="youtube" // or "vimeo"
      videoId={content.embed_url}
    />
  );
}
function formatImg(content) {
  return (
    <div className="card__img-wrapper">
      <div className="card__summary-image">
        <img src={content.url} alt={content.caption} />
      </div>
    </div>
  );
}
function formatBanner(content) {
  return (
    <div className="advert-here">
      <div className="advert-here-box">
        <img src={content.image_banner.url} alt={content.image_banner.alt} />
        <div className="advert__title">{content.title_of_banner[0].text}</div>
        <div className="advert__description">{content.description[0].text}</div>
        <a
          href={content.button_link.url}
          target="_blank"
          className="advert__button_link"
        >
          <Button>{content.button_label[0].text}</Button>
        </a>
      </div>
    </div>
  );
}
function formatBlockquote(content) {
  return (
    <div className="blockquote">
      <div>
        <img src={quotes} alt="" />
      </div>
      <p className="blockquote__quote">{content}</p>
    </div>
  );
}
export const handleView = () => {
  return window.innerWidth < 769 ? (
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
      <img className="img-right side-img" src={webLeftSide} alt="left-design" />
      <img
        className="img-left side-img"
        src={webRightSide}
        alt="right-design"
      />
    </div>
  );
};
// images link
export const facebookShare =
  "https://static.eventbree.com/trends/images/png/facebook-share-icon.png";
export const twitterShare =
  "https://static.eventbree.com/trends/images/png/twitter-share-icon.png";
export const linkedinShare =
  "https://static.eventbree.com/trends/images/svg/linkedin.svg";
export const googleplusShare =
  "https://static.eventbree.com/trends/images/svg/google-plus.svg";
export const pinterestShare =
  "https://static.eventbree.com/trends/images/png/pinterest-share-icon.png";
export const whatsappShare =
  "https://static.eventbree.com/trends/images/png/whatsapp-share.png";
export const emailShare =
  "https://static.eventbree.com/trends/images/svg/email.svg";
export const quotes =
  "https://static.eventbree.com/trends/images/svg/quotes.svg";
export const mobileLeftSide =
  "https://static.eventbree.com/trends/images/png/design-left-side.png";
export const mobileRightSide =
  "https://static.eventbree.com/trends/images/png/design-right-side.png";
export const webLeftSide = "images/design-right.svg";
export const webRightSide = "images/design-left.svg";
export const logoHeader =
  "https://static.eventbree.com/images/logos/full/eventbree-black-red.svg";

// select dropdown menu
export let Culture = [
  "Asian",
  "African",
  "European",
  "Indian",
  "Western",
  "Jewish",
  "Arabian",
  "Greek",
  "Italian",
  "English",
  "General",
  "Other"
];
export let Events = [
  "Bachelorette Party",
  "Bachelor's Eve",
  "Funerals",
  "Kids Party",
  "Birthdays",
  "Graduations",
  "Reunions",
  "Christening / Naming",
  "Ceremonies",
  "Anniversaries",
  "Social events",
  "Baby showers",
  "Weddings"
];
export let Category = [
  "Floral",
  "Cakes",
  " Canape",
  "Event Website",
  "Kids Entertainment",
  "Fabrics",
  "Stationaries",
  "Transportation",
  "Venue",
  "Mcs & Toastmaster",
  "Wigs & Weaves",
  "Jewellery",
  "Gift Service",
  "Cakes & Desserts",
  "Drinks & Cocktails",
  "Music Entertaiment",
  "Traditional Wedding Gifts",
  "Lighting & Sounds",
  "Desserts",
  "Party Host",
  "Dancing Entertainment",
  "Storyteller",
  "Decoration",
  "Honeymoon",
  "Fashion Accessories",
  "Invitation Cards",
  "Event & Party Rentals",
  "Catering Services",
  "Balloon Artstery",
  "Photography",
  "Balloon Twisters",
  "Bands",
  "Bridal Wears",
  "Mixologist",
  "Videography",
  "Fashion & Style",
  "Media Coverage",
  "Wedding Decorator",
  "Menswear",
  "Hosts & Hostesses",
  "Event Security",
  "Waiters & Waitresses",
  "Beauty, Hair & Make-up",
  "Kids Play Center",
  "Djs",
  "Event Planners",
  "Party Entertainment"
];
