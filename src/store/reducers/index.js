import { combineReducers } from "redux";
import trendReducer from "./trendReducer";
import sidebarReducer from "./sidebarReducer";
import blogReducer from "./blogReducer";
import classificationsReducer from "./classificationsReducer";

export default combineReducers({
  trends: trendReducer,
  sidebar: sidebarReducer,
  classifications: classificationsReducer,
  blog: blogReducer
});
