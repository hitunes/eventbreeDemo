import { TOGGLE_BLOG_SEARCH } from "./types";

export const toggleSearch = status => dispatch => {
  dispatch({ type: TOGGLE_BLOG_SEARCH });
};
