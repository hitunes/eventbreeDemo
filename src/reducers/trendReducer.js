import { FETCH_TRENDS } from "../actions/types";

const initialState = {
  trends: [],
  counter: 1
};
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRENDS:
      return {
        ...state,
        trends: action.payload
      };
    default:
      return state;
  }
};
