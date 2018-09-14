import { TOGGLE_BLOG_SEARCH } from "../actions/types";

const initialState = {
  searchOpen: false,
  searchBlog: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_BLOG_SEARCH:
      const toggleSearch = (state.searchOpen = !state.searchOpen);
      return { ...state, ...toggleSearch };
    default:
      return state;
  }
};
