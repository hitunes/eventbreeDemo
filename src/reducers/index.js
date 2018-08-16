import { combineReducers } from "redux";
import trendReducer from "./trendReducer";

export default combineReducers({
  trends: trendReducer
});
