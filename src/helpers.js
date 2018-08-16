/**
 * Fetch response helper
 *
 * @param {object} response
 */
const data = {
  twitter: {
    shareUrl: "https://twitter.com/intent/tweet/",
    text: "Check this out",
    url: "https://trends.eventbree.com",
    hashtags: "eventbree,trends",
    via: "_hitunes"
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
  }&url=${url}&hashtags=${data.twitter.hashtags}&via=${data.twitter.via}`;
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
