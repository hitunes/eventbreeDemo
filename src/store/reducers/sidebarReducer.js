import { TOGGLE_SIDEBAR } from "../actions/types";

const initialState = {
  sidebarOpen: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      const toggleSidebar = (state.sidebarOpen = !state.sidebarOpen);
      return { ...state, ...toggleSidebar };
    default:
      return state;
  }
};
