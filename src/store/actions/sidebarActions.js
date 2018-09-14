import { TOGGLE_SIDEBAR } from "./types";

export const toggleSidebar = status => dispatch => {
  dispatch({ type: TOGGLE_SIDEBAR });
};
