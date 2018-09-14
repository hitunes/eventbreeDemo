import {
  FETCH_CLASSIFICATION,
  UPDATE_CLASSIFICATION_LIKE
} from "../actions/types";

const initialState = {
  allClassifications: {
    loading: false,
    slug: [],
    meta: [],
    links: {},
    length: 0
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CLASSIFICATION:
      const classification = action.payload.data;
      const meta = action.payload.meta;
      const links = action.payload.links;
      const length = action.payload.data.length;
      classification.forEach(trend => {
        if (trend.like === undefined) {
          trend.like = trend.like ? true : false;
        }
      });
      console.log(classification);
      const fetchSlug = (state.allClassifications = {
        slug: classification,
        length: length,
        meta: meta,
        links: links,
        loading: false
      });
      return { ...state, ...fetchSlug }
    case UPDATE_CLASSIFICATION_LIKE:
      let classificationCards = [...state.allClassifications.slug];
      classificationCards.forEach(card => {
        const cardId = action.payload;
        if (card.id === cardId && card.like === false) {
          card.like = !card.like;
          card.stats.likes++;
        }
      });
      const Likes = (state.allClassifications = { slug: classificationCards });
      return { ...state, ...Likes };
    default:
      return state;
  }
};
